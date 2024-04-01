import { Button, TextField } from "@mui/material";
import React from "react";

export default function () {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src="" alt="logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login To Your Account</p>
        <TextField
          id="outlined-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}
