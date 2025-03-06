import React from "react";
import Herobanner from "./5imageLoan Application/herobanner";
import Loanfivesection from "./5imageLoan Application/loansection5img";
import LoanProducts from "./loan products/loan-products";
import GetMoneyNow from "./banner/GetMoneyNowbanner";
import Loanicons from "./banner/loanicons";
import BlackBlurSection from "./banner/black-blur-banner";
import WhyChooseUs from "./banner/WhyChooseUs";
import Minibanner from "./banner/yellow-banner";
import Watchicons from "./banner/watchicons";
import MultiItemCarousel from "./banner/carousel";
import Moneybannersection from "./banner/money-banner";
import Creditcardbanner from "./banner/creditcardbanner";
import EMICalculator from "./EMI Calculator/emi-calculator";
import About from "./loan products/about-us";

import Header from "./comman/header";
import Footer from "./comman/footer";



const Dashboard = () => {
  return (<>

<Header></Header>
   <Herobanner></Herobanner>
   <Loanfivesection></Loanfivesection>
   <LoanProducts></LoanProducts>
   <About></About>
   <GetMoneyNow></GetMoneyNow>
   <Loanicons></Loanicons>
   <BlackBlurSection></BlackBlurSection>
   <WhyChooseUs></WhyChooseUs>
   <Minibanner></Minibanner>
   <Watchicons></Watchicons>
   <MultiItemCarousel></MultiItemCarousel>
   <Moneybannersection></Moneybannersection>
   <Creditcardbanner></Creditcardbanner>
   <EMICalculator></EMICalculator>
   
   <Footer></Footer>



  </>

  );
};

export default Dashboard;
