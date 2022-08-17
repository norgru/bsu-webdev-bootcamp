import './App.css';


function App() {

  const displayDate = () => {
    let time = Date();
    console.log(time);
  }
  

  return (
    <div className="App">
      <button onClick={displayDate}>Display date</button>
    </div>
  );
}

export default App;
