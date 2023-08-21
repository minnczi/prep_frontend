import MzList from "./pages/MzList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MzListDetail from "./pages/MzListDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MzList />}></Route>
          <Route path="/mzlist/:listId" element={<MzListDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
