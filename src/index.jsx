import { h } from 'preact';
import { useState } from 'preact/hooks';

export function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
