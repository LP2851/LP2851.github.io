import { memo, useEffect, useMemo, useState } from "react";
import { PageContainer } from "../../components/page-container/PageContainer";
import { fetchJsonData } from "../../helpers/DataReader.ts";
import { Spinner } from "../../components/spinner/Spinner.tsx";
import { ProjectData } from "../../types/ProjectData.ts";
import { ProjectCard } from "./project-card/ProjectCard.tsx";
import "./Projects.css";

const PROJECTS_DATA_LOCATION = "/data/projects.json";

const ProjectsComponent = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = (await fetchJsonData(
          PROJECTS_DATA_LOCATION,
        )) as ProjectData[];
        const jsonData = await Promise.all(
          rawData.map(async (data) => {
            if (!data.auto) return data;
            return {
              ...data,
              ...((await fetchJsonData(data.auto)) as ProjectData),
            } as ProjectData;
          }),
        );
        setProjects(jsonData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    fetchData();
  }, []);

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.technologies?.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter((p) => p.technologies?.includes(activeFilter));
  }, [projects, activeFilter]);

  return (
    <PageContainer title="Projects">
      {projects.length !== 0 ? (
        <>
          {allTechnologies.length > 0 && (
            <div className="filter-bar">
              <button
                className={`filter-btn${activeFilter === null ? " filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(null)}
              >
                All
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  className={`filter-btn${activeFilter === tech ? " filter-btn--active" : ""}`}
                  onClick={() =>
                    setActiveFilter(activeFilter === tech ? null : tech)
                  }
                >
                  {tech}
                </button>
              ))}
            </div>
          )}
          <div className="projects-list">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
            {filteredProjects.length === 0 && (
              <p className="no-results">No projects match this filter.</p>
            )}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};

export const Projects = memo(ProjectsComponent);
