import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import User from "./User";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </HashRouter>
  );
}
