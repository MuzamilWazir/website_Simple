import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from './components/FeaturesSection'
import Wordflow from "./components/Wordflow";
import Price from "./components/Price";
import Testimonoal from "./components/Testimonoal";
import Footer from "./components/Footer";

const App = () => {
  return <>
   <Navbar/>
<div className="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection/>

<FeaturesSection/>
<Wordflow/>
<Price/>
<Testimonoal/>
<Footer/>
</div>
  </>;
};

export default App;
