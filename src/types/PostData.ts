export type PostData = {
  title: string;
  content: Content;
  tags: string[];
  date: string;
};

export enum ContentTypes {
  DEFAULT = "default",
}

export type Content = {
  type: ContentTypes.DEFAULT;
  data: {
    textContent?: string;
  };
};
