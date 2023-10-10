import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Jobs from './components/jobs/Jobs';
import SaveJobs from './components/savejobs/SaveJobs';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'/>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/saved-job" element={<SaveJobs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
