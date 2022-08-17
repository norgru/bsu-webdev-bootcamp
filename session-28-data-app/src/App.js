import './App.css';
import {useState, useEffect} from 'react';

function App() {

  //initializing the state
  const [ planets, setPlanets ] = useState([]); // setting it to an empty array


  useEffect(() => {
    console.log('hello');
    fetch('https://swapi.dev/api/planets')
      .then(
        response => response.json()
      )
      .then(
        (data) => {
          console.log(data);
          setPlanets(data.results);
        }
      )
  },[])


  useEffect(() => {
    console.log(planets);
  },[planets])

  return (
    <div className="App">
      {
        planets.map((planet, index) => {
          return <p>{planet.name}</p>
        })
      }
    </div>
  );
}

export default App;
