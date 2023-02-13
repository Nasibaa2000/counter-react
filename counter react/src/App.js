import React from 'react';
import './index.scss';

function App() {

  //вытаскиваем usestate хук из реакта. внутри него хранится какое-то число по умполчанию
  //вытаскиваем саму переменную и функцию, которая будет менять ее 
  const [count, setCount] = React.useState(0); 

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClicMinus = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClicMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;