import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import { loginDB, singupDB } from "../../store/user/actions";
import { selectAuth } from "../../store/user/selectors";
import { IRegistrationProps } from "./interfaces";
import "./styles.scss";

export const Registration: React.FC<IRegistrationProps> = React.memo(
  ({ type }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(selectAuth);

    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
      if (isAuth) navigate("/home");
    }, []);

    // changes name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setName(e.target.value);

    // changes login
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setLogin(e.target.value);

    // changes password
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setPassword(e.target.value);

    // handle Submit
    const handleBtn = async () => {
      if (!name.trim() && type.toLowerCase() === "singup")
        return setError("Name is empty");
      else if (!login.trim()) return setError("Email is empty");
      else if (!password.trim()) return setError("Password is empty");

      // login
      if (type.toLowerCase() === "login") {
        dispatch(loginDB(login, password));
      }
      // sing up
      else if (type.toLowerCase() === "singup") {
        dispatch(singupDB(name, login, password));
      }

      setName("");
      setLogin("");
      setPassword("");
      navigate("/home");
    };

    return (
      <div className="auth">
        <div className="auth-wrapper">
          <h2>
            {type.toLowerCase() === "login" ? "Login Page" : "Sing Up Page"}
          </h2>

          <div className="auth-form">
            {type.toLowerCase() !== "login" && (
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            )}

            {/* login input */}
            <TextField
              label="Email"
              variant="outlined"
              value={login}
              onChange={handleLoginChange}
            />

            {/* password input */}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <h4 className="error">{error}</h4>

            {/* submit button */}
            <Button variant="outlined" color="success" onClick={handleBtn}>
              {type.toLowerCase() === "login" ? "Login" : "Sing Up"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
