import './App.css'
import Count from './Count';

function App() {

  const handleClick = () => {
    alert('The btn is Clicked');
  };

  const handleClick3 = (num) => {
    alert( num + 5)
  }

  return (
    <>
      <h1>React Core Concepts Part 2</h1>

      <Count></Count>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert('second btn clicked') }}>Bnt 2</button>
      <button onClick={()=>{handleClick3(2)}}>Btn 3</button>
    </>
  )
}

export default App
