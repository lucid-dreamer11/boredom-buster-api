import { useEffect, useState } from 'react';
import image from './icons8-dice-96 (1).png';
import './App.css';

function App() {
const [advice, setAdvice] = useState("");

useEffect(() => {
    getAdvice();
},[])

const getAdvice = async () => {
const response = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await response.json();
// console.log(data.activity);
setAdvice(data.activity)
}
return (
    <div className="App">
        <div className='container'>
            <h2>Generate an idea</h2>
        </div>
        <div className='container'>  
            <button onClick={getAdvice} className='glow'>
                <img src={image} alt='dice'/>
             </button>
        </div>
        <div className='container'>
            <h3>{advice}</h3>
        </div>
    </div>
    );
}
export default App;
