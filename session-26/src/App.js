import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const peopleList = [
    {
      personName: 'John',
      email: 'john@johnmail.com'
    },
    {
      personName: 'Sarah',
      email: 'sarah@sarahmail.com'
    },
    {
      personName: 'Ed',
      email: 'ed@edmail.com'
    }
  ]

  const [people, setPeople] = useState(peopleList);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  function addPerson(){
    console.log('add person function');
    setPeople([
      ...people,
      {
        'personName': name,
        'email': email
      }
    ])
    
  }

  function handleChange(){
    console.log('handleChange');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
    addPerson();
  }

  

  return (
    <div className="App">
      

      <form onSubmit={submitHandler}>
          <label>
              Name:
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
              email:
              <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <input type="submit" value="Submit" />
      </form>

      {
        people.map(function(person, index){
          return(
            <div>
              {person.personName}
              <hr></hr>
              {person.email}
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