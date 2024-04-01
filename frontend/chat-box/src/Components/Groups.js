import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

export default function Groups() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className="list-container">
      <div className={"ug-header" + (lightTheme ? "" : " dark")}>
        <img src="" alt="logo" style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Groups</p>
      </div>

      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"ug-list" + (lightTheme ? "" : " dark")}>
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className="con-icon">p</p>
          <p className="con-title">test groups</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className="con-icon">p</p>
          <p className="con-title">test groups</p>
        </div>
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className="con-icon">p</p>
          <p className="con-title">test groups</p>
        </div>
      </div>
    </div>
  );
}
