import { Routes, Route, } from 'react-router-dom';
import './App.css';
import EnterFeedBack from './Components/Pages/EnterFeedback';
import ThankYou from './Components/Pages/ThankYou';
import Dashboard from './Components/Pages/Dashboard';
import { useEffect, useState } from "react";
import Home from './Components/Pages/Home';

function App() {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc")
    const data = await response.json()

    setFeedback(data)
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
      const data = await response.json()
      setFeedback([data, ...feedback])
    }

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="get-started" element={<EnterFeedBack handleAdd={addFeedback} />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="dashboard" element={<Dashboard feedback={feedback} />} />
      </Routes>
    </div>
  );
}

export default App;
