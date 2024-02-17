import { memo } from "react";
import { PageContainer } from "../../components/page-container/PageContainer";

const ProjectsComponent = () => {
  return <PageContainer title="Projects">
    <h3>
      This page is a WIP. Coming soon!
    </h3>
  </PageContainer>
}

export const Projects = memo(ProjectsComponent);