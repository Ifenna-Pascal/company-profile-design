import Career from "./pages/Career";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[#1A1A1A] "> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/careers" element={<Career />} />
          <Route path="**" element={<div>Not found</div>} />
        </Routes>          
    </div>
  );
}

export default App;
