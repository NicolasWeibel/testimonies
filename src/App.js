import './App.css';
import Testimony from "./components/Testimony"

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>This is what our students says about us:</h1>
        <Testimony 
          image="nicolas"
          fullName="Nicolás Weibel"
          country="Argentina"
          position="Software Engineer"
          company="Google"
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo massa nibh, quis fringilla augue tincidunt sit amet. Donec sodales neque in ante tempor scelerisque. Sed vulputate pharetra lectus, at tempus massa venenatis vitae. Nunc sit amet nibh lorem. Proin."
        />
        <Testimony 
          image="gustavo"
          fullName="Gustavo Rodriguez"
          country="Chile"
          position="Project Manager"
          company="Samsung"
          testimony="Lorem ipsum dolor sit amet, quis fringilla augue tincidunt sit amet. Sed vulputate pharetra lectus, at tempus massa venenatis vitae. Nunc sit amet nibh lorem. Proin."
        />
        <Testimony 
          image="andrea"
          fullName="Andrea Smith"
          country="United States"
          position="Backend Developer"
          company="Facebook"
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo massa nibh, quis fringilla augue tincidunt sit amet. Donec sodales neque in ante tempor scelerisque. Sed vulputate pharetra lectus, at tempus massa venenatis vitae. Nunc sit amet nibh lorem. Proin. Donec commodo massa nibh, quis fringilla augue tincidunt sit amet"
        />
      </div>
    </div>
  );
}

export default App;
