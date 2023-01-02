
import './App.css';
import Form from './components/form';



function App() {
  return (
    <div className="App">
        <h1>Medication HELP </h1>
        <p> Anna <span class="tab"></span> Piter </p>
      <img
        src={require('./2.jpg')}
        alt=""
      />
      <img
        src={require('./3.jpg')}
        alt=""
      />
      <br></br>
      <td/>
      <button class="favorite styled"
        type="button">
        Connect
      </button>
      <h2> Add Medication</h2>
      <Form/>
    </div>
  );
}

export default App;

