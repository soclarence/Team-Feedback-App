import { Routes, Route, } from 'react-router-dom';
import './App.css';
import EnterFeedBack from './Components/Pages/EnterFeedback';
import ThankYou from './Components/Pages/ThankYou';
import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="get-started" element={<EnterFeedBack />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
