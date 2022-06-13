import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { IProjectProps } from "./interfaces";
import { getDate, getInd } from "./services";
import { DeleteProjectDialog } from "../DeleteProjectDialog";
import "./styles.scss";

export const Project: React.FC<IProjectProps> = React.memo(
  ({ name, description, last_update, id, onDelete }) => {
    let className = `project ${id}`;
    const [open, setOpen] = useState(false);
    const projectRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const handleClose = () => setOpen(false);
    const openDialog = () => setOpen(true);

    const handleDelete = () => {
      const ind = getInd(projectRef);

      onDelete(ind ? ind : 0);
      setOpen(false);
    };

    const openProject = () => navigate(`/project/${getInd(projectRef)}`);

    return (
      <div className={className} ref={projectRef}>
        <div onClick={openProject}>
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
