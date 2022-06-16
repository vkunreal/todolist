import { Button } from "@mui/material";
import { ITodoCardProps } from "./interfaces";
import "./styles.scss";

export const TodoCard: React.FC<ITodoCardProps> = ({ name, description }) => {
  return (
    <div className="todoCard">
      <h1 className="todoCard-heading">{name}</h1>

      <p className="todoCard-description">{description}</p>

      <Button color="error" variant="outlined">
        Delete
      </Button>
    </div>
  );
};
