import logo from './logo.svg';
import {useRef, useState} from 'react'
import './App.css';


function App() {

  const textRef = useRef(null)
  const [text, textChange] = useState('')

  const handler = (event) =>{
    textChange(event.target.value)

  }

  return (
    <div className="App">
      <header className="App-header" onClick={()=>{ textRef.current.focus();}}>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{text}</div>
      </header>
      <input
        type='text'
        ref={textRef}
        value={text}
        onChange={handler}
        style={{
          opacity: 0, // Make the text box transparent
          position: 'absolute', // Optional: remove it from the layout flow
        }}
      
      />
    

    </div>
  );
}

export default App;
