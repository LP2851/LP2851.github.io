
export type ImageData = {
  src: string;
  alt: string;
};

export type LinkData = {
  name: string;
  link: string;
};

export type ProjectData = {
  auto?: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  active: boolean;
  links: LinkData[];
  technologies: string[];
  keywords: string[];
  images?: ImageData[];
};
