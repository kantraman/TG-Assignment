import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Preloader from "./components/PreLoader/Preloader";
import Product from "./components/Product/Product";


function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 4500);
  return (
    <div>
      <Preloader loading={loading} />
      <Header />
      <Product />
    </div>
  );
}

export default App;
