import {memo} from "react";
import {Card} from "../../../components/card/Card.tsx";
import {ProjectData} from "../../../helpers/ProjectData.ts";
import {TagsBar} from "../../../components/tags-bar/TagsBar.tsx";
import {BooleanTag} from "../../../components/tags-bar/tag/BooleanTag.tsx";
import "./ProjectCard.css";
import {shortDate} from "../../../helpers/PostData.ts";

type Props = {
  project: ProjectData;
};

const ProjectCardComponent = ({project: props}: Props) => {
  return (
    <div className="project-card">
      <Card>
        <div className="header">
          <h3 className="title">{props.name}</h3>
          <div className="info">
            {props.active ? (
              <BooleanTag tag={"active"} bool={true}/>
            ) : (
              <BooleanTag tag={"inactive"} bool={false}/>
            )}

            {props.endDate && (
              <p className="post-date">
                {shortDate(props.startDate)} - {shortDate(props.endDate)}
              </p>
            )}
            {!props.endDate && (
              <p className="post-date">
                {shortDate(props.startDate)} - Present
              </p>
            )}
          </div>
        </div>

        {props.technologies.length > 0 && (
          <TagsBar tags={props.technologies} barName="Technologies"/>
        )}
        {props.keywords.length > 0 && (
          <TagsBar tags={props.keywords} barName="Keywords"/>
        )}

        <p className="project-description">{props.description}</p>

        {props.links.length > 0 && (
          <div className="project-links">
            <h4>Related Links</h4>
            {props.links.map((link) => {
              return (
                <p>
                  <span className="link-name">{link.name}: </span>
                  <a className="link" href={link.link}>
                    {link.link}
                  </a>
                </p>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
