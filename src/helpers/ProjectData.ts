export type ProjectData = {
  auto?: string;
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
  images?: {
    src: string;
    alt: string;
  }[];
};
