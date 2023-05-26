//App.js
//App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Fail from "./pages/Fail";
import Pass from "./pages/Pass";
import Alert from "./pages/Alert";
import data from "./pages/data.json";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/pass" element={<Pass />} />
          <Route path="/alert" element={<Alert />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
