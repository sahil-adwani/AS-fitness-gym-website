import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./elements/Navbar";
import Header from "./elements/Header";
import Banner from "./elements/Banner";
import Workouts from "./elements/Workouts";
import Images from "./elements/Images";
import Packages from "./elements/Packages";
import  Bookdemo  from "./elements/Bookdemo";
import Contact from "./elements/Contact";
import BMIcalculator from "./elements/BMIcalculator";
import Footer from "./elements/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header/>
      <Banner />
      <div id="workouts"><Workouts /></div>
      <div id="images"><Images /></div>
      <div id="packages"><Packages /></div>
      <div id="bookdemo"><Bookdemo /></div>
      <div id="contact"><Contact /></div>
      <BMIcalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;