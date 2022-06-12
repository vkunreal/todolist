import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import { IProjectProps } from "./interfaces";
import { getDate } from "./date";
import { DeleteProjectDialog } from "../DeleteProjectDialog";
import "./styles.scss";

export const Project: React.FC<IProjectProps> = React.memo(
  ({ name, description, last_update, id, onDelete }) => {
    let className = `project ${id}`;
    const [open, setOpen] = useState(false);
    const projectRef = useRef<HTMLDivElement>(null);

    const handleClose = () => setOpen(false);
    const openDialog = () => setOpen(true);

    const handleDelete = () => {
      const className = projectRef.current?.getAttribute("class");

      if (className) {
        const ind = Number(className.match(/\d/g)?.join(""));

        onDelete(ind);
        setOpen(false);
      }
    };

    return (
      <div className={className} ref={projectRef}>
        <div>
          <h1 className="project-heading">{name}</h1>

          <p className="project-description">{description}</p>
          <p className="project-lastUpdate">
            Updated {getDate(last_update)} ago
          </p>
        </div>

        <div className="project-rightside">
          <Button variant="outlined" color="error" onClick={openDialog}>
            Delete
          </Button>
        </div>

        <DeleteProjectDialog
          isOpen={open}
          onClose={handleClose}
          onDelete={handleDelete}
        />
      </div>
    );
  }
);
