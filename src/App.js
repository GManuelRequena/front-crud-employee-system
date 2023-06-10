import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/editEmployee/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
