import Select from "react-select";
import makeAnimated from "react-select/animated";
import { tagList } from "../lib/tags";
import { techList } from "../lib/tech";

const animatedComponents = makeAnimated();

export default function TagDropdown({
  selectedTags,
  setSelectedTags,
  setTagsChanged,
  tech,
  profile,
}) {
  const handleChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
    setTagsChanged(true);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1a1a1a",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1a1a1a",
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "#1a1a1a",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : state.data.color,
      backgroundColor: state.isSelected ? state.data.color : "#1a1a1a",
      ":active": {
        backgroundColor: state.data.color,
      },
      ":hover": {
        backgroundColor: state.data.color,
        color: "white",
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: state.data.color,
      color: "white",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "white",
      ":hover": {
        backgroundColor: state.data.color,
        color: "black",
      },
    }),
  };

  let options;
  if (!tech) {
    options = tagList.map((tag) => ({
      value: tag.name,
      label: tag.name,
      color: tag.color,
    }));
  } else {
    options = techList.map((tech) => ({
      value: tech.name,
      label: tech.name,
      color: tech.color,
    }));
  }

  return (
    <div>
      {!profile && <>{tech ? <h1>Tech Stack</h1> : <h1>Tags</h1>}</>}
      <Select
        closeMenuOnSelect={false}
        value={selectedTags}
        components={animatedComponents}
        isMulti
        options={options}
        styles={customStyles}
        onChange={handleChange}
      />
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        {selectedTags &&
          selectedTags.map((tag) => (
            <span
              key={tag.value}
              className="tag"
              style={{
                borderColor: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
      </div>
    </div>
  );
}
