import './App.css'
import Team from './Team';
import Counter from './counter';
import Users from './Users';
import Friends from './Friends';


function App() {


  function handleClick() {
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 Clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>
      <button onClick={() => {addToFive(3)}}>four</button>
    </>
  )
}

export default App
