import {FC, memo, ReactNode} from "react";
import "./PageContainer.css";

type Props = {
  children?: ReactNode;
  title: string;
};

const PageContainerComponent: FC<Props> = (props) => {
  return (
    <>
      <h2 className="page-title">{props.title}</h2>
      <div className="page-container">{props.children}</div>
    </>
  );
};

export const PageContainer = memo(PageContainerComponent);
