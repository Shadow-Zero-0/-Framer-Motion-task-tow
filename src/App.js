
import { useEffect, useState } from 'react';
import './App.css';
import {motion} from 'framer-motion';
function App() {
  const [next, setnext] = useState(0);
  const [x, setx] = useState();
  const [y, sety] = useState();
useEffect(() => {
  
  const translate = (eo) => {
    setx(eo.clientX-20)
    sety(eo.clientY-20)
  }
  window.addEventListener('mousemove',translate)
  return () => {
  window.removeEventListener('mousemove',translate)
    
  }
}, []);

  return (
    <div className="App">
      <motion.div animate={{
        translateX: x,
        translateY: y,
      }} className='couser'></motion.div>
      <button onClick={() => {
        setnext(next+1)
      }}>next {next}</button>
    </div>
  );
}

export default App;
