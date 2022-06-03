import { Button } from "@mui/material";
import { IProjectProps } from "./interfaces";
import { getDate } from "./date";
import "./styles.scss";
import { useRef, useState } from "react";
import { DeleteProjectDialog } from "../DeleteProjectDialog";

export const Project: React.FC<IProjectProps> = ({
  name,
  description,
  last_update,
  id,
  onDelete,
}) => {
  let className = `project ${id}`;
  const projectRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    const className = projectRef.current?.getAttribute("class");

    if (className) {
      const ind = Number(className.match(/\d/g)?.join(""));

      onDelete(ind);
      setOpen(false);
    }
  };

  const openDialog = () => setOpen(true);

  return (
    <div className={className} ref={projectRef}>
      <div>
        <h1 className="project-heading">
          {name} {id}
        </h1>

        <p className="project-description">{description}</p>
        <p className="project-lastUpdate">Updated {getDate(last_update)} ago</p>
      </div>

      <div className="project-rightside">
        <Button variant="outlined" color="error" onClick={openDialog}>
          Delete
        </Button>
      </div>

      <DeleteProjectDialog isOpen={open} onDelete={handleDelete} />
    </div>
  );
};
