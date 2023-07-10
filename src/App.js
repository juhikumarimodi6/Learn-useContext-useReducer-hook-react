import './App.css';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import { useGlobalState } from './Context/StateProvider';

function App() {
  const countContext = useGlobalState();
  return (
      <div className="App">
        count - {countContext.countState.count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        Total Click count - {countContext.countState.clickCount}
      </div>
  );
}

export default App;
