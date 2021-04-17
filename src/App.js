import { useState } from 'react'; 
import MonthlyPackages from './views/MonthlyPackages.js';
import Splash from './views/Splash/Splash.js'; 
import './App.css';

function App() {
  const [loaded, setLoaded] = useState({ page: false, splash: false });
  return (
    <>
    <MonthlyPackages />
    <Splash setLoaded={setLoaded} show={!loaded.page} />
  </>
  );
}

export default App;
