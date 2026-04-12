import { memo } from "react";
import { ProjectData } from "../../../types/ProjectData.ts";
import { shortDate } from "../../../helpers/PostData.ts";
import { ImageGrid } from "../../../components/image-grid/ImageGrid.tsx";
import "./ProjectCard.css";

type Props = {
  project: ProjectData;
};

const ProjectCardComponent = ({ project: props }: Props) => {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-top">
          <div className="project-meta">
            <span
              className={`project-status ${
                props.active
                  ? "project-status--active"
                  : "project-status--inactive"
              }`}
            >
              {props.active ? "Active" : "Inactive"}
            </span>
            <span className="project-dates">
              {shortDate(props.startDate)} —{" "}
              {props.endDate ? shortDate(props.endDate) : "Present"}
            </span>
          </div>
          <h3 className="project-title">{props.name}</h3>
          {props.description && (
            <p className="project-description">{props.description}</p>
          )}
        </div>

        {(props.technologies?.length > 0 || props.keywords?.length > 0) && (
          <div className="project-tags">
            {props.technologies?.map((tech) => (
              <span key={tech} className="project-tech-tag">
                {tech}
              </span>
            ))}
            {props.keywords?.map((kw) => (
              <span key={kw} className="project-keyword-tag">
                {kw}
              </span>
            ))}
          </div>
        )}

        {props.images && props.images.length > 0 && (
          <div className="project-images">
            <ImageGrid images={props.images} />
          </div>
        )}

        {props.links?.length > 0 && (
          <div className="project-links">
            {props.links.map((link) => (
              <a
                key={link.link}
                className="project-link"
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
                <span className="project-link-arrow">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
