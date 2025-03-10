import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For Router and Routes
// import Header from './comman/header'; 
import Header from './component/comman/header'
import Dashboard from './component/dashboard';
import Footer from './component/comman/footer';
import LoanForm from './loginForm/LoanForm';
import PersonalLoans from './loginForm/presonalloan';
import Homeloan from './loginForm/homeloan';
import Homeloans from './loginForm/homeloan';
import BusinessLoans from './loginForm/businessloan';
import CarLoan from './loginForm/carloan';
import ConsumerLoan from './loginForm/Conuserloan';
import CommercialVehicleLoan from './loginForm/commercialloan';

;


function App() {
  return (
   
        <Router>
         
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/loanForm" element={<LoanForm />} />
         <Route path="/Homeloans" element={<Homeloans/>} />
          <Route path="/PersonalLoans" element={<PersonalLoans />} />
          <Route path="/BusinessLoans" element={<BusinessLoans />} />
          <Route path="/CarLoan" element={<CarLoan />} />
          <Route path="/ ConsumerLoan" element={<ConsumerLoan />} />
          <Route path="/CommercialVehicleLoan" element={<CommercialVehicleLoan />} />
         
          </Routes>
          
        </Router>
    
  );
}

export default App;
