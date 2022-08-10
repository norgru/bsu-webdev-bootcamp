import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const peopleList = [
    {
      personName: 'John',
      email: 'john@johnmail.com',
      meals: []
    },
    {
      personName: 'Sarah',
      email: 'sarah@sarahmail.com',
      meals: []
    },
    {
      personName: 'Ed',
      email: 'ed@edmail.com',
      meals: []
    }
  ]

  const [people, setPeople] = useState(peopleList);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const meals = ["Breakfast", "Lunch"];

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
        updatedList = [...checked, event.target.value];
    } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  function addPerson(){
    console.log('add person function');
    setPeople([
      ...people,
      {
        'personName': name,
        'email': email,
        'meals': checked
      }
    ])
    
  }

  useEffect(() => {
    console.log('Component mounted');
}, [])



useEffect(() => {
    console.log(checked);
}, [checked])


  const submitHandler = (e) => {
    e.preventDefault();
    
    addPerson();

    function validateInputs(){
      var regex = /^[a-z ,.'-]+$/i;

      if(regex.test(name)){
        addPerson();
        console.log('submitted');
      }
      else if(regex.test(email)){
        console.log('hi');

      }
      else{
        
        console.log('false name');
        window.alert('NO!')
      }
    }
    validateInputs();

  }

  

  return (
    <div className="App">
      
      <div className='loginText'>
        <h1>Log in</h1>
      </div>

      <form onSubmit={submitHandler}>
          <label>
              Name:
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
              E-mail:
              <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <div>
              {meals.map((item, index) => (
                  <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheck}/>
                      <span>{item}</span>
                  </div>
              ))}
          </div>
          <input type="submit" value="Submit" />
      </form>

      {
        people.map(function(person, index){
          return(
            <div>
              {person.personName}
              <br></br>
              {person.email}
              <br></br>
              {person.meals}
              <hr></hr>
            </div>

          )

        })

      }

    </div>
  );
}



//const handleC

export default App;

//Create form
//Add l