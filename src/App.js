
import { useCallback, useState } from 'react';
import './App.css';
import Output from './Components/Output';

function App() {
  const [showPahragraph, setShowPahragraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  console.log("App Running")


  const clickHandler = useCallback(() => {
    if (allowToggle) {
      setShowPahragraph((prevShowPahragraph) => !prevShowPahragraph)
    }
  }, [allowToggle]);

  const allowToggleButton = () => {
    setAllowToggle(true)
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Output show={showPahragraph} items={[4, 7, 2, 6, 1, 9]} />
      <button onClick={allowToggleButton} >Allow Toggel Pahragraph</button>
      <button onClick={clickHandler}>Toggel Pahragraph</button>

    </div>
  );
}

export default App;
