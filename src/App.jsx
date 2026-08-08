import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuilderCardPage from "./pages/BuilderCardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder-card" element={<BuilderCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;