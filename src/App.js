import Greeting from './components/Greet';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Posts';

/**
 * The function returns a component called "App" that renders a "Greeting" component.
 * @returns The `App` component is being returned, which contains a `div` element with a class name of
 * "App" and a `Greeting` component.
 */
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  //const name = prompt('What is your name ');

  const person = {name: 'John', age: 40}

  const links = "https://www.google.com"

  return (
    <div className="App">

      <Navbar></Navbar>

     
      
      <div className="content">
      <Home></Home>
        <h1>Hello World!</h1>
        <h2>{title}</h2>
        <p>The number of likes we have roght now for this application is {likes} times</p>
        {/* <p>Your name is {name}</p> */}
        <p>This is the person you are looking for: {person.name}</p>
        <p>This is your age: {person.age}</p>

        <a href={links}>Google Search Engine</a>

        <Greeting></Greeting>

        <Post></Post>
      </div>
    </div>
  );
}

export default App;
