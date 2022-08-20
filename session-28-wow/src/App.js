import './App.css';
import {useState} from 'react';


function App() {

  const [time, setTime] = useState()

  const displayDate = () => {
    setTime(Date());
  }

  return (
    <div className="App">
      <button onClick={displayDate}>Display date</button>
      <p>{time}</p>
    </div>
  );
}

export default App;
