import logo from './logo.svg';
import './App.css';
import LikeButton from './likebutton'
import bg from './bg.jpg';
import Question from './question'
import Timer from './timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bg} className="App-logo" alt="logo" />

        <p>
         
        </p>
        <a
          className="App-link"
          href="https://github.com/JustinDowdy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Justin's Portfolio



        </a>
        <Timer />
        <Question />
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
