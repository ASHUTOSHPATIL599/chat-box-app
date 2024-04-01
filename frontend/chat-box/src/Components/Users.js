import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Users_Groups() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src="" alt="logo" style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">online users</p>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="con-icon">p</p>
          <p className="con-title">test user</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">p</p>
          <p className="con-title">test user</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">p</p>
          <p className="con-title">test user</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">p</p>
          <p className="con-title">test user</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">p</p>
          <p className="con-title">test user</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">p</p>
          <p className="con-title">test user</p>
        </div>
      </div>
    </div>
  );
}
