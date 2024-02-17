import React, {memo} from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../helpers/routes/RoutesHelper";

const RouterComponent = () => {
  return <div className="App-route">
    <Routes>
      {
        ROUTES.map(route => <Route {...route} />)
      }
    </Routes>
  </div>
}

export const Router = memo(RouterComponent);