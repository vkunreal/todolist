import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import "./styles.scss";

export const CreateProjectComp: React.FC = () => {
  return (
    <div className="createProjectComp">
      <h1>Create a new project</h1>

      <div className="createProjectComp-form">
        <TextField
          className="createProjectComp-input"
          placeholder="Name"
          autoComplete="off"
        />

        <div className="createProjectComp-form-bottom">
          <FormControlLabel control={<Checkbox />} label="Private" />

          <Button variant="outlined" color="success">
            Create
          </Button>
        </div>

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
