import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Properties from "./Properties";
import Users from "./Users";
import "./AdminPanel.css";

function AdminPanel() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const loadContent = (menu) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <Dashboard />;
      case "properties":
        return <Properties />;
      case "users":
        return <Users />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <Sidebar onSelect={loadContent} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default AdminPanel;
