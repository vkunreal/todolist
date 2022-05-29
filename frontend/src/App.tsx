import { useEffect } from "react";
import { RoutesComp } from "./views/Routes";
import "./App.scss";

const App = () => {
  useEffect(() => {
    fetch("/api/projects")
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <RoutesComp />
    </div>
  );
};

export default App;
