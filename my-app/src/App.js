import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from './component/sampleComponent';
function App() {
  const wording = "스터디가 끝나간다!"
  const [number, setNumber] = useState(0); 
  return (
    <div className="App">
      <SampleComponent propsTest = {wording} number = {number}/>
      <button onClick={()=>setNumber(number + 1)}>버튼</button>
    </div>
  );
}

export default App;
