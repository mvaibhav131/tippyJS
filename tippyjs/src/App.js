import tippy from 'tippy.js';
import './App.css';

function App() {

  tippy('#myButton', {
    content: "I'm a Tippy tooltip!",
    placement: 'top',
    arrow: true,
    animation: 'fade',
    theme: 'gradient',
    interactive: true,
    allowHTML: true,

  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <button id="myButton">My Button</button>
        <br/>
        <br/>
        <br/>
        <br/>
          The Cool Tooltip library
          <code>src/App.js</code>
           and save to reload.
        </p>
        </header>
    </div>
  );
}

export default App;
