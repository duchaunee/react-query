import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </>
  );
}

export default App;
