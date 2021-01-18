import './App.css';
import License from './Components/License'

function App() {
  return (
    <div className="App">
      
      <License name="Liban Rage" title="Fullstack Developer" age={21} image="./profile.png"/>
      <License name="John Smith" title="IOS Developer" age={50} image="./profile.png"/>
      <License name="James Kennedy" title="React Native Developer" age={25} image="./profile.png"/>

      
      
    </div>
  );
}

export default App;
