import {memo, useEffect, useState} from "react";
import {PageContainer} from "../../components/page-container/PageContainer";
import {fetchJsonData} from "../../helpers/DataReader.ts";
import {Spinner} from "../../components/spinner/Spinner.tsx";
import {ProjectData} from "../../helpers/ProjectData.ts";
import {ProjectCard} from "./project-card/ProjectCard.tsx";
import {WipMessage} from "../../components/wip-message/WipMessage.tsx";

const PROJECTS_DATA_LOCATION = "/data/projects.json";

const ProjectsComponent = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetchJsonData(PROJECTS_DATA_LOCATION) as ProjectData[];
        setProjects(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return <PageContainer title="Projects">
    {projects.length !== 0
      ? projects.map((p) => <ProjectCard project={p}/>)
      : <Spinner/>
    }
    <WipMessage/>
  </PageContainer>
}

export const Projects = memo(ProjectsComponent);