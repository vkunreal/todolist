import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import axios from "axios";

interface IProject {
  id: number;
  name: string;
  description: string;
}

export const Home = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    axios.get(`/api/projects/${user?.id}`).then((res) => setProjects(res.data));
  }, []);

  return (
    <div>
      <div>
        {!!projects.length &&
          projects.map((proj) => (
            <div key={proj.id}>
              <h1>{proj.name}</h1>
              <p>{proj.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
