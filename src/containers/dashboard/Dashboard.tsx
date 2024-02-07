import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dashboard.css";


const DashboardContainer = () => {
  return <div className="dashboard-container">
    <div className="dashboard-grid">
      <Link className="dashboard-link-card" to="/blog">
        <div className="dashboard-link-text">Blog</div>
        <FontAwesomeIcon icon="message" className="dashboard-link-icon" />
      </Link>
      <Link className="dashboard-link-card" to="/">
        <div className="dashboard-link-text">Projects (WIP)</div>
        <FontAwesomeIcon icon="cogs" className="dashboard-link-icon" />
      </Link>
      <Link className="dashboard-link-card" to="/">
        <div className="dashboard-link-text">WIP</div>
        <FontAwesomeIcon icon="cogs" className="dashboard-link-icon" />
      </Link>
      <Link className="dashboard-link-card" to="/">
        <div className="dashboard-link-text">WIP</div>
        <FontAwesomeIcon icon="cogs" className="dashboard-link-icon" />
      </Link>
      <Link className="dashboard-link-card" to="/">
        <div className="dashboard-link-text">WIP</div>
        <FontAwesomeIcon icon="cogs" className="dashboard-link-icon" />
      </Link>
      <Link className="dashboard-link-card" to="/">
        <div className="dashboard-link-text">WIP</div>
        <FontAwesomeIcon icon="cogs" className="dashboard-link-icon" />
      </Link>
    </div>
  </div>;
}

export const Dashboard = memo(DashboardContainer);
