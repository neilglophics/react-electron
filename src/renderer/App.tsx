import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

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
