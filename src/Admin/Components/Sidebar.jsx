// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBar-header">
        <h2>Application Submission System</h2>
      </div>
      <ul className="sideBar-Menu">
        <li>
          <Link to="/adminDashboard">
            <DashboardIcon /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users">
            <PersonOutlinedIcon /> User Management
          </Link>
        </li>
        <li>
          <Link to="/submissions-management">
            <FolderSharedOutlinedIcon /> Submissions Management
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <SettingsSuggestOutlinedIcon /> Settings and Configuration
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <NotificationsActiveOutlinedIcon /> Notifications and Alerts
          </Link>
        </li>
        <li>
          <Link to="/task-management">Task Management</Link>
        </li>
        <li>
          <Link to="/data-management">Data Management</Link>
        </li>
        <li>
          <Link to="/logout">
            <LogoutOutlinedIcon /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
