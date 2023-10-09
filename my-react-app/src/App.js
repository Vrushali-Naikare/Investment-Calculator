
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ResultTable from './components/ResultTable/ResultTable';
import Userinput from './components/Userinput/Userinput';

function App() {
  // eslint-disable-next-line
  const [ userInput,setUserInput] =useState(null);

const calculateHandler = (userInput) => {
  setUserInput (userInput);

  // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...


    const yearlyData = []; // per-year results


    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];


    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }


    // do something with yearlyData ...
};

  return (
    <div>
    <Header/>
    <Userinput onCalculate={calculateHandler} />
    <ResultTable data={yearlyData} initialInvestment={userInput.currentSavings} />
    
    </div>
  );
}

export default App;
