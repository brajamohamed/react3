import "./App.css";
import Navbar from "./Navbar/Navbar";
import CardContainer from "./CardContainer/CardContainer";
import About from "./About";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/photos");
      let result = await response.json();
      setData(result);
      console.log("The fetched data is:", result);
    }
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CardContainer data={data} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
