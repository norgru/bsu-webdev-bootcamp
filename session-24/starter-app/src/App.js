import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import {useState} from 'react';
import {articles} from 

function App() {

  const [darkMode, setDarkMode] = useState(false);

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
