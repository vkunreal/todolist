import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../store/user/actions";
import { IRegistrationProps } from "./interfaces";
import { Button, TextField } from "@mui/material";
import axios from "axios";

export const Registration: React.FC<IRegistrationProps> = ({ type }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // changes login input
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };

  // changes password input
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  // handle Submit
  const handleBtn = async () => {
    setLogin("");
    setPassword("");

    // login
    if (type.toLowerCase() === "login") {
      await axios
        .post("/auth/login", {
          email: login,
          password,
        })
        .then((res) => dispatch(setUser(res.data)))
        .then(() => navigate("/home"));
    }
    // sing up
    else if (type.toLowerCase() === "singup") {
      await axios
        .post("/auth/registration", {
          email: login,
          password,
        })
        .then((res) => dispatch(setUser(res.data)))
        .then(() => navigate("/home"));
    }
  };

  return (
    <div>
      <h2>{type.toLowerCase() === "login" ? "Login page" : "Sing Up page"}</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {/* login input */}
        <TextField
          label="Email"
          variant="outlined"
          onChange={handleLoginChange}
          value={login}
        />

        {/* password input */}
        <TextField
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
          value={password}
        />

        {/* submit button */}
        <Button variant="outlined" color="primary" onClick={handleBtn}>
          {type.toLowerCase() === "login" ? "Login" : "Sing Up"}
        </Button>
      </div>
    </div>
  );
};
