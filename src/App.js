import './App.css';
import Greeting from './components/Greet';

/**
 * The function returns a component called "App" that renders a "Greeting" component.
 * @returns The `App` component is being returned, which contains a `div` element with a class name of
 * "App" and a `Greeting` component.
 */
function App() {
  return (
    <div className="App">
      <Greeting></Greeting>
    </div>
  );
}

export default App;
