// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/users">User Management</Link>
        </li>
        <li>
          <Link to="/submissions-management">Submissions Management</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics and Reporting</Link>
        </li>
        <li>
          <Link to="/settings">Settings and Configuration</Link>
        </li>
        <li>
          <Link to="/security">Security and Access Control</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications and Alerts</Link>
        </li>
        <li>
          <Link to="/task-management">Task Management</Link>
        </li>
        <li>
          <Link to="/data-management">Data Management</Link>
        </li>
        <li>
          <Link to="/system-health">System Health and Monitoring</Link>
        </li>
        <li>
          <Link to="/customization">Customization and Theming</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
