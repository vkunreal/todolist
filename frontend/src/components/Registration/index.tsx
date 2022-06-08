import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../store/user/actions";
import { IRegistrationProps } from "./interfaces";
import { Button, TextField } from "@mui/material";
import { selectAuth } from "../../store/user/selectors";
import { updateProfileDB } from "../../store/profile/actions";
import axios from "axios";
import "./styles.scss";

export const Registration: React.FC<IRegistrationProps> = ({ type }) => {
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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  // changes login input
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value);

  // changes password input
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
      await axios
        .post("/auth/login", {
          email: login,
          password,
        })
        .then((res) => dispatch(setUser(res.data)))
        .then(() => dispatch(updateProfileDB()))
        .then(() => navigate("/home"));
    }
    // sing up
    else if (type.toLowerCase() === "singup") {
      await axios
        .post("/auth/registration", {
          name,
          email: login,
          password,
        })
        .then((res) => dispatch(setUser(res.data)))
        .then(() => dispatch(updateProfileDB()))
        .then(() => navigate("/home"));
    }

    setName("");
    setLogin("");
    setPassword("");
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
};
