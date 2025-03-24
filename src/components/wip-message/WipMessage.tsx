import { memo } from "react";
import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";

const WipMessageComponent = () => {
  return (
    <Card>
      <div>
        <h3>This page is Work in Progress.</h3>
        <Spinner />
      </div>
    </Card>
  );
};

export const WipMessage = memo(WipMessageComponent);
