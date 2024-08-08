import { render } from 'preact';
import { HelloWorld, Counter } from '../../src/index';

function App() {
  return (
    <div>
      <h1>Your Package Example</h1>
      <HelloWorld />
      <Counter />
    </div>
  );
}

render(<App />, document.getElementById('app'));
