import { Provider } from "react-redux";
import { RoutesComp } from "./views/Routes";
import { store } from "./store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RoutesComp />
    </Provider>
  );
};

export default App;
