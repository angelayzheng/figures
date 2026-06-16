import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Draw from "./pages/Draw";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
