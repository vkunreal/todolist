import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

interface IRegistrationProps {
  type: string;
}

export const Registration: React.FC<IRegistrationProps> = ({ type }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleBtn = async () => {
    setLogin("");
    setPassword("");

    if (type.toLowerCase() === "login") {
      await axios
        .post("/auth/login", {
          email: login,
          password,
        })
        .then((res) => console.log(res));
    } else if (type.toLowerCase() === "singup") {
      await axios
        .post("/auth/registration", {
          email: login,
          password,
        })
        .then((res) => console.log(res));
    }
  };

  return (
    <div>
      <h2>{type.toLowerCase() === "login" ? "Login page" : "Sing Up page"}</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <TextField
          label="Email"
          variant="outlined"
          onChange={handleLoginChange}
          value={login}
        />

        <TextField
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
          value={password}
        />

        <Button variant="outlined" color="primary" onClick={handleBtn}>
          {type.toLowerCase() === "login" ? "Login" : "Sing Up"}
        </Button>
      </div>
    </div>
  );
};
