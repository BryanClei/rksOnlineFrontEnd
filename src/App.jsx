import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Login from "./component/Login";
import { RouterModule } from "./routes/routing";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <RouterModule />
      </Provider>
    </>
  );
}

export default App;
