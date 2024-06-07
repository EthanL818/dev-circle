import Select from "react-select";
import makeAnimated from "react-select/animated";
import { tagList } from "../lib/tags";

const animatedComponents = makeAnimated();

export default function TagDropdown({
  selectedTags,
  setSelectedTags,
  setTagsChanged,
}) {
  const handleChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
    setTagsChanged(true);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#B3B3B3",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#B3B3B3",
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "#B3B3B3",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : state.data.color,
      backgroundColor: state.isSelected ? state.data.color : "#B3B3B3",
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

  const options = tagList.map((tag) => ({
    value: tag.name,
    label: tag.name,
    color: tag.color,
  }));

  return (
    <div>
      <h1>Tags</h1>
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
        {selectedTags.map((tag) => (
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
