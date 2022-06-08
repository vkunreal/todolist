import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";

import { Project } from "../Project";
import { IProject } from "./interfaces";
import { selectProjects } from "../../store/projects/selectors";
import {
  deleteProjectDB,
  updateProjectsDB,
} from "../../store/projects/actions";
import "./styles.scss";

export const ProjectsList: React.FC = () => {
  // projects
  const projects = useSelector(selectProjects);
  const [pageProjects, setPageProjects] = useState<IProject[]>([]);

  // pages
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(0);

  const dispatch = useDispatch();

  // get projects
  useEffect(() => {
    dispatch(updateProjectsDB());
  }, []);

  // set pages count and projects, which will be displayed
  useEffect(() => {
    setCountPages(Math.ceil(projects.length / 5));
    setPageProjects(projects.slice((page - 1) * 5, page * 5));
  }, [projects]);

  useEffect(() => {
    setPageProjects(projects.slice((page - 1) * 5, page * 5));
  }, [page]);

  useEffect(() => {
    if (!pageProjects.length && page !== 1) {
      setPage((prevVal) => prevVal - 1);
    }
  }, [pageProjects]);

  const handleDelete = (id: number) => {
    dispatch(deleteProjectDB(id));
  };

  // change page
  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => setPage(value);

  return (
    <div className="projectsList">
      {/* Heading */}
      <h1 className="projectsList-heading">Projects List {page}</h1>

      {/* List of projects */}
      <div className="projectsList">
        {!!projects.length &&
          pageProjects.map((proj) => (
            <Project
              name={proj.name}
              description={proj.description}
              last_update={proj.last_update}
              onDelete={handleDelete}
              id={proj.id}
              key={proj.id}
            />
          ))}

        {/* Loading */}
        {!projects.length && <div className="spinner"></div>}
      </div>

      {/* Pagination */}
      <div className="projectsList-pagination">
        <Pagination
          count={countPages}
          size="large"
          page={page}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};
