import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [msg, setMsg] = useState('');

  const reload = () => {
    window.location.reload();
  }

  const handleCalculation = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
      alert('Please enter valid numbers for weight and height');
      return;
    }

    const bmiFormula = (weightNum / (heightNum * heightNum) * 703).toFixed(2);
    setBmi(bmiFormula);

    if (bmiFormula < 18.5) {
      setMsg('You are underweight');
    } else if (bmiFormula >= 18.5 && bmiFormula < 25) {
      setMsg('You are healthy');
    } else if (bmiFormula >= 25 && bmiFormula < 30) {
      setMsg('You are overweight');
    } else {
      setMsg('You are obese');
    }
  }

  return (
    <div className='container'>
      <div className='bmicalc'>
        <h1>BMI Calculator</h1>
        <form onSubmit={handleCalculation}>
          <div>
            <label className='labels'>Age: </label>
            <br />
            <input
              type='number'
              className='bmi-calc'
              placeholder='Enter age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className='labels'>Weight: </label>
            <br />
            <input
              type='number'
              className='bmi-calc'
              placeholder='Enter weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className='labels'>Height: </label>
            <br />
            <input
              type='number'
              className='bmi-calc'
              placeholder='Enter height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type='submit' className='btn'>Calculate</button>
            <button type='button' className='btn btn-reload' onClick={reload}>Reload</button>
          </div>
          <div className='result'>
            <h3>Age: {age}</h3>
            <h3>Your BMI is: {bmi}</h3>
            <p className='p-msg'>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
