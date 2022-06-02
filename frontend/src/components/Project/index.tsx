import { Button } from "@mui/material";
import { IProjectProps } from "./interfaces";
import { getDate } from "./date";
import "./styles.scss";

export const Project: React.FC<IProjectProps> = ({
  name,
  description,
  last_update,
}) => {
  return (
    <div className="project">
      <div>
        <h1 className="project-heading">{name}</h1>

        <p className="project-description">{description}</p>
        <p className="project-lastUpdate">Updated {getDate(last_update)} ago</p>
      </div>

      <div className="project-rightside">
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>
    </div>
  );
};
