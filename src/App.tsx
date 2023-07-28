import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";

import Detail from "./routes/Detail";
import Post from "./routes/List";

export default function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
