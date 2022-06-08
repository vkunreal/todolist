import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProjectDB } from "../../store/projects/actions";
import "./styles.scss";

export const CreateProjectComp: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const handleCreateProject = () => {
    if (!name.trim()) {
      return setError("Name is empty");
    } else if (!description.trim()) {
      return setError("Description is empty");
    }

    setName("");
    setDescription("");
    setError("");

    dispatch(addProjectDB(name, description));
  };

  return (
    <div className="createProjectComp">
      <h1>Create a new project</h1>

      <div className="createProjectComp-form">
        <TextField
          className="createProjectComp-input"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleChangeName}
        />

        <TextField
          className="createProjectComp-input"
          placeholder="Description"
          autoComplete="off"
          value={description}
          onChange={handleChangeDescription}
        />

        <div className="createProjectComp-form-bottom">
          <FormControlLabel control={<Checkbox />} label="Private" />

          <Button
            variant="outlined"
            color="success"
            onClick={handleCreateProject}
          >
            Create
          </Button>
        </div>

        <p className="error">{error}</p>

        <div className="createProjectComp-description">
          <p>
            For all your projects on this resource, you retain copyright. At any
            time you can delete your project or change its visibility
          </p>

          <p>
            If you create a public project, then all people can see your to-do
            list
          </p>
        </div>
      </div>
    </div>
  );
};
