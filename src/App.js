import "./index.css";
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="App">
      <h1>React Cursor</h1>
      <AnimatedCursor innerSize={13}
      outerSize={20}
      color='293, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}/>
    </div>
    
  );  
}


export default App;
