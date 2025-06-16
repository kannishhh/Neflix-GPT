import { Provider } from "react-redux";
import Body from "./pages/Body";
import appStore from "./stores/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};
export default App;
