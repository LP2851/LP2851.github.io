export type PostData = {
  title: string;
  content: Content;
  tags: string[];
  controls: {
    iFrameVideo?: string;
  };
};

export enum ContentTypes {
  DEFAULT="default",
  IFRAME_VIDEO="iframe-video",
}

export type Content = {
  type: ContentTypes.DEFAULT;
  data: {
    textContent?: string;
  };
};
