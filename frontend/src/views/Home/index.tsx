import { useSelector } from "react-redux";
import { CreateProjectComp } from "../../components/CreateProjectComp";
import { ProjectsList } from "../../components/ProjectsList";
import { selectAuth } from "../../store/user/selectors";
import "./styles.scss";

export const Home = () => {
  const isAuth = useSelector(selectAuth);

  return (
    <div>
      {isAuth && (
        <div className="homeComp">
          <CreateProjectComp />
          <ProjectsList />
        </div>
      )}
    </div>
  );
};
