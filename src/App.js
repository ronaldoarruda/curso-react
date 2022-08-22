import './App.css';

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/images';

function App() {
  return (
    <div className="App">
      <h2>Hello Word!</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
    </div>
  );
}

export default App;
