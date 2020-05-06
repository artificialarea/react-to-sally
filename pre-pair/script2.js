'use strict';

const appRoot = document.querySelector('#root');

function App() {
  return (
    <div>
      <header>
        <h1>Sally Student</h1>
      </header>
      <ul>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, appRoot);
