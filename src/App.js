import "./App.css";
import Home from "./components/Home.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
