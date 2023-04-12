import { useState } from 'react';
import './App.css';
import  Counter  from './counter';
import  ErrorBoom  from './Error';
function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count => count +1);
  return (
    <div className="App">
      <div className="App-header">
        Hello Demo<p style={{color:"red"}}>Error Boundary</p>

<ErrorBoom fallback={<div> Counter Crashed hahaa </div>}>
<Counter count={count} inc={inc}/>
</ErrorBoom>
      </div>
    </div>
  );
}

export default App;
