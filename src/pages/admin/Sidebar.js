import React from "react";

function Sidebar({ onSelect }) {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <a href="#" onClick={() => onSelect("dashboard")}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onSelect("properties")}>
            Properties
          </a>
        </li>
        <li>
          <a href="#" onClick={() => onSelect("users")}>
            Users
          </a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
