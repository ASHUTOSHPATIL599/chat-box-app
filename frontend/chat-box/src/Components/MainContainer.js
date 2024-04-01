import React from "react";
import "./myStyle.css";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Users_Groups from "./Users";
import { Outlet } from "react-router-dom";
export default function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />

      <Outlet />
    </div>
  );
}
