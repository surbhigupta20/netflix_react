import Body from "./components/Body.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
function App() {
  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
}

export default App;
