import { memo } from "react";
import { PageContainer } from "../../components/page-container/PageContainer";
import { WIPMessage } from "../../components/wip-message/WIPMessage";

const ProjectsComponent = () => {
  return <PageContainer title="Projects">
    <WIPMessage />
  </PageContainer>
}

export const Projects = memo(ProjectsComponent);