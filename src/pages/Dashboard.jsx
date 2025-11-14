import React from "react";
import { ContentSection, SidebarSection } from "../constants/index.js";

const Dashboard = () => {
  return <div className="flex bg-indigo-50">
    <SidebarSection/>
    <ContentSection/>
  </div>;
};

export default Dashboard;
