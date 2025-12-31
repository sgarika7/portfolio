import SectionTitle from "./SectionTitle";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiAngular,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiJenkins,
  SiGit,
  SiPandas,
  SiTensorflow,
} from "react-icons/si";

import { FaAws,FaJava,FaHtml5,FaCss3Alt, } from "react-icons/fa";

const ICONS = {
  Java:FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  SQL: SiPostgresql,
  React: SiReact,
  Angular: SiAngular,
  "Spring Boot": SiSpringboot,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Git: SiGit,
  AWS:FaAws,
  pandas: SiPandas,
  Tensorflow:SiTensorflow,
  HTML5:FaHtml5,
  CSS3:FaCss3Alt,
};

/**
 * Official brand colors
 */
const ICON_COLORS = {
  Java: "#E76F00",
  Python: "#FFD43B",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  Angular: "#DD0031",
  "Spring Boot": "#6DB33F",
  AWS: "#FF9900",
  Glue: "#FF9900",
  Redshift: "#FF9900",
  PostgreSQL: "#336791",
  MySQL: "#00758F",
  Docker: "#2496ED",
  Jenkins: "#D24939",
  Git: "#F05032",
  SQL: "#7C3AED",
  pandas: "#150458",
  Tensorflow:"#FF6F00",
  HTML5:"#E34F26",
  CSS3:"#1572B6",
};

export default function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionTitle
          pill="My Skills"
          title="Technologies I Work With"
          subtitle="Tools and technologies I use to bring ideas to life"
        />

        <div className="skillTilesV2">
          {data.skillTiles.map((name) => {
            const Icon = ICONS[name];
            const color = ICON_COLORS[name] || "#ffffff";

            return (
              <div key={name} className="skillTileV2">
                <div className="skillIconV2" style={{ color }}>
                  {Icon ? <Icon /> : <span>{name.slice(0, 2).toUpperCase()}</span>}
                </div>
                <div className="skillLabelV2">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
