import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function ProjectBox({ project, index }) {
  const parentEl = useRef(null);
  const imgEl = useRef(null);
  const infoEl = useRef(null);
  useEffect(() => {
    if (index % 2 !== 0) {
      imgEl.current.className = "hidden-right";
      infoEl.current.className = "info hidden-left";
      parentEl.current.replaceChildren(infoEl.current, imgEl.current);
    }
  }, [index]);

  return (
    <div className="project theme-change" ref={parentEl}>
      <img src={project.imgSrc} ref={imgEl} className="hidden-left" />
      <div className="info hidden-right" ref={infoEl}>
        <h2 className="theme-change">{project.title}</h2>
        <p>{project.description}</p>
        <div className="techs">
          {project.techs.map((t) => (
            <span className="theme-change" key={t}>{t}</span>
          ))}
        </div>
        <div className="links">
          <a target="_blank" href={project.code} className="code">
            Code <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a target="_blank" href={project.site} className="live">
            Preview page <FontAwesomeIcon className="icon" icon={faLink} />
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectBox.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
};
