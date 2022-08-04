import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import {useState} from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const article = [
    {
        title : "Vinyl review 1",
        text: "Great vinyl",
        image: "1.jpeg"
    },
    {
        title : "Vinyl review 2",
        text: "Fantastic vinyl",
        image: '2.jpeg'
    },
    {
        title : "Vinyl review 3",
        text: "Exquisite vinyl",
        image: '3.jpeg'
    }

]

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <button onClick={() => setDarkMode(!darkMode)}>Switch to dark mode</button>
      <Header/>
      {
        article.map((article, i) => {
          return (
            <Section
              title = (article.title)
              image = (article.image)
              text = (article.text)
            />
          )
        }}
      }
      <Footer/>
    </div>
  );
}

export default App;
