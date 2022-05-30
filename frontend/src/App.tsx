import { Provider } from "react-redux";
import { RoutesComp } from "./views/Routes";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RoutesComp />
      </PersistGate>
    </Provider>
  );
};

export default App;
