import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exat path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
