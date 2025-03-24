import { memo, PropsWithChildren } from "react";
import "./Card.css"

type Props = unknown;

const CardComponent = (props: PropsWithChildren<Props>) => {
  return <div className="card">
    { props.children }
  </div>;
}

export const Card = memo(CardComponent);
