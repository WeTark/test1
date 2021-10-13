import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './text/hello';

function App() {
  const [name, setName] = React.useState('Ishika');

  React.useEffect(()=>{
    console.log(name)
  }, [])

  const BtnClick = () => {
    setName('Prabhat')
  }

  return (
    <div className="App">
     hii {name}
     <Hello />
     <Hello />
     <button onClick={BtnClick}>On Click</button>
    </div>
  );
}

export default App;
