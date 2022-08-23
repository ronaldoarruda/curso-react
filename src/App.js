import './App.css';

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/images';
import Hooks from './components/hookes'
import List from './components/List';
import AnotherList from './components/AnotherList';
import RenderCond from './components/RenderCond';

function App() {
  return (
    <div className="App">
      <h2>Hello Word!</h2>
      <FirstComponent />
      <hr />
      <AnotherComponent />
      <Images />
      <hr />
      <Hooks />
      <hr />
      <List />
      <hr />
      <AnotherList />
      <hr />
      <RenderCond x={8} y={10}/>
    </div>
  );
}

export default App;
