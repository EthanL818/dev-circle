import TagCard from "../../components/TagCard";
import { tagList } from "../../lib/tags";

export default function AllTagsPage({}) {
  return (
    <div>
      <div className="card-content">
        <div className="tag-container" style={{ gap: "15px" }}>
          {tagList.map((tag) => (
            <TagCard tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
