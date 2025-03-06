import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For Router and Routes
// import Header from './comman/header'; 
import Header from './component/comman/header'
import Dashboard from './component/dashboard';
import Footer from './component/comman/footer';
import LoanForm from './loginForm/LoanForm';






function App() {
  return (
   
        <Router>
         
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/loanForm" element={<LoanForm />} />

          </Routes>
          
        </Router>
    
  );
}

export default App;
