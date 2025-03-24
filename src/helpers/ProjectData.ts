export type ProjectData = {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  active: boolean;
  links: {
    name: string;
    link: string;
  }[];
  technologies: string[];
  keywords: string[];
};
