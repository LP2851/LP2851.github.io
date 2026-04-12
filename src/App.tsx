import { HashRouter, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeProvider, Theme, useTheme } from "./context/theme/ThemeContext";
import { Router } from "./components/router/Router";
import { ROUTE_PATHS } from "./helpers/routes/RoutesHelper";
import "./App.css";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const AppNav = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <nav className="App-header">
      <Link to={ROUTE_PATHS.DASHBOARD} className="App-name">
        LP2851
      </Link>
      <div className="nav-links">
        <NavLink
          to={ROUTE_PATHS.PROJECTS}
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link--active" : ""}`
          }
        >
          Projects
        </NavLink>
        <a
          href="https://www.linkedin.com/in/lucasphillips28"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link nav-link--external"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <button
          className="theme-toggle"
          onClick={() =>
            changeTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon icon={theme === Theme.DARK ? "sun" : "moon"} />
        </button>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <div className="App">
          <div className="App-container">
            <AppNav />
            <Router />
          </div>
        </div>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
