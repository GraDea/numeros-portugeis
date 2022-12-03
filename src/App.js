import './App.css';
import writtenNumber from 'written-number';

function App() {
  let numero = Math.floor(Math.random() * 30_000);
  writtenNumber.defaults.lang = "ptPT";
  let text = writtenNumber(numero)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Estudar dos nomeros
        </p>
        <p>
        {numero} - {text}
      </p>
      </header>
    </div>
  );
}

export default App;
