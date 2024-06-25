// components/PopularTechCard.js
import Link from "next/link";
import { usePopularTech } from "../lib/context";
import { techLabelToKebabCase } from "../lib/tech";

export default function PopularTechCard() {
  const { popularTech } = usePopularTech();

  return (
    <div className="card-tech">
      <h2>Top Tech</h2>
      <p style={{ marginBottom: "1rem" }}>What your peers are building with.</p>
      <ul>
        {popularTech.map((tech) => (
          <li key={tech.name}>
            <Link href={`/tech?name=${techLabelToKebabCase(tech.name)}`}>
              {tech.icon}
              <button className="tech-button">
                {tech.name}{" "}
                {tech.count == 1 ? (
                  <p className="frequency">{`${tech.count} project`}</p>
                ) : (
                  <p className="frequency">{`${tech.count} projects`}</p>
                )}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
