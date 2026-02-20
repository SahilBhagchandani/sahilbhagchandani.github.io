import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li key={i} className="software-skill-inline" name={skill.skillName}>
            {skill.fontAwesomeClassName ? (
              <i className={skill.fontAwesomeClassName} aria-hidden="true"></i>
            ) : (
              // fallback icon if missing class
              <i className="fas fa-code" aria-hidden="true"></i>
            )}
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
