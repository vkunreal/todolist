import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import axios from "axios";

import { selectUser } from "../../store/user/selectors";
import { Project } from "../Project";
import { IProject } from "./interfaces";
import "./styles.scss";

export const ProjectsList: React.FC = () => {
  // projects
  const [projects, setProjects] = useState<IProject[]>([]);
  const [pageProjects, setPageProjects] = useState<IProject[]>([]);

  // pages
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(0);

  // user
  const user = useSelector(selectUser);

  // get projects
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`/api/projects/${user?.id}`)
        .then((res) => setProjects(res.data));
    }, 2500);
  }, []);

  // set pages count
  useEffect(() => {
    setCountPages(Math.ceil(projects.length / 5));
  }, [projects]);

  // set projects, which will be displayed
  useEffect(() => {
    setPageProjects(projects.slice((page - 1) * 5, page * 5));
  });

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
