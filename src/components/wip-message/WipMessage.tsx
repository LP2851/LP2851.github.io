import { memo } from "react";
import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";
import "./WipMessage.css";

const WipMessageComponent = () => {
  return (
    <Card>
      <div className="wip-message">
        <h3>This page is a Work in Progress.</h3>
        <Spinner />
      </div>
    </Card>
  );
};

export const WipMessage = memo(WipMessageComponent);
