import ProjectBox from "./ProjectBox";
import data from "../assets/projects.json";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h1>Projects</h1>
        {data.map((p, i) => (
          <ProjectBox key={p.title} project={p} index={i}/>
        ))}
      </div>
    </section>
  );
}
