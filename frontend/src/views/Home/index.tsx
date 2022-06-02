import { CreateProjectComp } from "../../components/CreateProjectComp";
import { ProjectsList } from "../../components/ProjectsList";
import "./styles.scss";

export const Home = () => {
  return (
    <div className="homeComp">
      <CreateProjectComp />

      <ProjectsList />
    </div>
  );
};
