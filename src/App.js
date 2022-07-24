import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/auth/auth.components";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.componet";
import BoardsDirectory from "./components/board-directory/board-directory.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/:boardpage" element={<BoardsDirectory />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
