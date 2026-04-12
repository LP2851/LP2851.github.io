import { memo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "../../helpers/routes/RoutesHelper";

const RouterComponent = () => {
  const location = useLocation();

  return (
    <div className="App-route">
      <div
        key={location.pathname}
        style={{
          animation:
            "pageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <Routes location={location}>
          {ROUTES.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export const Router = memo(RouterComponent);
