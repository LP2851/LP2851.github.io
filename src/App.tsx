import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Dashboard } from "./containers/dashboard/Dashboard";
import { BlogPosts } from "./containers/blog/BlogPosts";
import './App.css';
import {ThemeProvider} from "./context/theme/ThemeContext";
import { JSX } from "react";

type RouteConfig = {
  path: string;
  element?: JSX.Element;
}

const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/blog",
    element: <BlogPosts />,
  },
];

const App = () => {
  return (
    <HashRouter >
      <ThemeProvider>
        <div className="App">
          <div className="App-container">
            <div className="App-header">
              <Link to="/" className="App-name">LUCAS PHILLIPS</Link>
            </div>
            <div className="App-route">
              <Routes>
                {
                  ROUTES.map(route => <Route { ...route } />)
                }
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
