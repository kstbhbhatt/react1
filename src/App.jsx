import React from "react";
import './App.css';
import Heading from "./Heading";
import Description from "./Description";
import Feature from "./Feature";
import Colors from "./Colors";
import Footer from "./Footer";
import Header from "./Header";
import Specs from "./Specs";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <Description />
      <hr />
      <Feature />
      <Colors />
      <Specs />
      <ContactUs />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
