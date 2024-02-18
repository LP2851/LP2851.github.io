import { memo } from "react";
import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";

const WIPMessageComponent = () => {
  return <Card>
    <div>
      <h3>
        This page is Work in Progress.
      </h3>
      <Spinner/>
    </div>
  </Card>
}

export const WIPMessage = memo(WIPMessageComponent);