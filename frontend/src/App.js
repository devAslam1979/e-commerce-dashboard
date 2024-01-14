import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent/>}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/products" element={<h1>Products Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>No Page Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
