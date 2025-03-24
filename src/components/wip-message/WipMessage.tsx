import {memo} from "react";
import {Card} from "../card/Card";
import {Spinner} from "../spinner/Spinner";

const WIPMessageComponent = () => {
  return <Card>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
      <h3>
        This page is a Work in Progress.
      </h3>
      <Spinner/>
    </div>
  </Card>
}

export const WIPMessage = memo(WIPMessageComponent);