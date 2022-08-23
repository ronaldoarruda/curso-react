import './App.css';

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/images';
import Hooks from './components/hookes'
import List from './components/List';
import AnotherList from './components/AnotherList';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

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
      <hr />
      <Fragment />
      <hr />
      <Container>
        <h1>Este é filho do container </h1>
      </Container>
    </div>
  );
}

export default App;
