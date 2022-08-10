import './App.css';

import {useState, useEffect} from 'react';

import RadioButtons from './components/RadioButtons'

function App() {

  //First we make the meal options
  const mealOptions = ['Fish & chips', 'Lobster Bisque', 'Mushroom soup']
  
  //Initiate the state variable for the selected meal options
  const [selectedMeals, setSelectedMeals] = useState([]);

  const handleCheck = (e) => {
    //This is the function that fires when we click on a checkbox
    //The aim is to update the selected meals array
    //First we need to createa a duplicate array and add the items that have been checked to it, then we update the selectedMeals state afterwards
    
    //console.log(e.target.checked);

    let tempArray = [...selectedMeals];

    if(e.target.checked){
      console.log('TRUE - ITEM IS CHECKED, ADD IT TO THE ARRAY');
      //use assignment operator to assign new value to the tempArray
      tempArray = [...selectedMeals, e.target.value]
      console.log(tempArray)
    }
    else{
      //if the item is not checked remove it from the tempArray
      tempArray.splice(selectedMeals.indexOf(e.target.value), 1)
      console.log(tempArray)
    }
    setSelectedMeals(tempArray);
    
  }

  //Check the selectedMeals after it has been changed
  //useEffect can be called

  useEffect(() => {
    console.log(selectedMeals);
  }, [selectedMeals])
  

  return (
    <div className="App">
      
      <form>
              {/*Iterate through the mealOptions array and display a checkbox for each one */}
              {mealOptions.map((item, index) => (
                  <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheck}/>
                      <span>{item}</span>
                  </div>
              ))}
              
      </form>

      <RadioButtons><RadioButtons/>

    </div>
  );
}

export default App;
