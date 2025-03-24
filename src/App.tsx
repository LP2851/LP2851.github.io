import { HashRouter, Link }from "react-router-dom";
import { ThemeProvider } from "./context/theme/ThemeContext";
import { Router } from "./components/router/Router";
import { ROUTE_PATHS } from "./helpers/routes/RoutesHelper";
import { JSX } from "react";
import './App.css';

const App = () => {
  return (
    <HashRouter >
      <ThemeProvider>
        <div className="App">
          <div className="App-container">
            <div className="App-header">
              <Link to={ROUTE_PATHS.DASHBOARD} className="App-name">LUCAS PHILLIPS</Link>
            </div>
            <Router />
          </div>
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
