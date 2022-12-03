import './App.css';
import writtenNumber from 'written-number';
import { useState } from 'react';



function App() {

  const [numero, setNumero] = useState({n: Math.floor(Math.random() * 30_000), v: false})
  writtenNumber.defaults.lang = "ptPT";
  

  const renewNumero = ()=>{
    if(numero.v)
    {
      setNumero( {n: Math.floor(Math.random() * 30_000), v: false} );
    }
    else
    {
      setNumero( {n: numero.n, v: true})
    }

    
  }
  
  return (
    <div className="App" onClick={renewNumero}>
      <header className="App-header">
        <p>
          Estudar dos nomeros
        </p>
        <p>
        {numero.n}
      </p>
      <p style={{visibility: numero.v ? 'visible' : 'hidden'}}>{writtenNumber(numero.n)}</p>
      </header>
    </div>
  );
}

export default App;
