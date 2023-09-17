import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Thankyou from './components/Thankyou';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/Thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
