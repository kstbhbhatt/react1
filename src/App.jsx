import React from "react";
import './App.css';
import Heading from "./Heading";
import Description from "./Description";
import Feature from "./Feature";
import Colors from "./Colors";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <Description />
      <hr />
      <Feature />
      <Colors />
      <Footer />
    </div>
  );
}

export default App;
