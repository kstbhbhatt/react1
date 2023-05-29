import React from "react";
import './App.css';
import Header from "./Header";
import Description from "./Description";
import Feature from "./Feature";
import Colors from "./Colors";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Description />
      <hr />
      <Feature />
      <Colors />
      <Footer />
    </div>
  );
}

export default App;
