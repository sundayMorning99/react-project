import React, { useState } from 'react';
import etfData from './etfData';  // Import ETF data from etfData.js
import  './App.css';
import { Container, Button, Form} from 'react-bootstrap';
import CreatePieChart from './CreatePieChart';


const App = () => {
  const [dollarAmount, setDollarAmount] = useState('');  // State to hold the dollar amount input
  const [assetAllocation, setAssetAllocation] = useState([0,0,0,0,0,0]);  // State to hold the asset allocation input
  const [selectedType, setSelectedType] = useState(''); // State to hold investment type in pull-down menu;
  const [expense, setExpense] = useState(0); //State to hold expense ratio




  const handleSubmit=()=>{
    let temp=0;
    for (let i=0;i<assetAllocation.length;i++){
      temp += assetAllocation[i]*etfData[i].expenseRatio;
    }
    
    setExpense(temp);
  }

  // Function to calculate the allocation for each ETF based on input
  const handleChange =(e)=>{
    const choice=e.target.value;
    setSelectedType(choice);
    
    switch(choice){
      case 'aggressive':
        setAssetAllocation([0.35, 0.05, 0.10, 0.15, 0.05, 0.30]);
        break;
      case 'balanced':
        setAssetAllocation([0.3, 0.03, 0.07, 0.12, 0.03, 0.40]);
        break;
      case 'conservative':
        setAssetAllocation([0.2, 0.02, 0.05, 0.10, 0.03, 0.60]);
        break;
      default:
        setAssetAllocation([0,0,0,0,0,0]);
    }

    const pieData = etfData.map((etf, index)=>({
      assetClass: etf.assetClass,
      allocation: assetAllocation[index],
    }));
    console.log(pieData);
  };

  const handleDollar=(e)=>{
    setDollarAmount(e.target.value);
  }

  // Calculate the investment per ETF based on the dollar amount and allocations
  const investmentPerETF = etfData.map((etf, index) => {
    return {
      ...etf,
      allocatedAmount: (dollarAmount * (assetAllocation[index])), 
    };
  });
 


  return (
    <Container>
    
          <h1 className="title1">ETF Portfolio Allocation<span className="title2">by Launchcode Advisor</span></h1>
          {/*Total $ amount for investment*/}
          <Container className="my-4 p-3 bg-success bg-light">
            <label>
              Dollar Amount: 
              <input
                type="number"
                value={dollarAmount}
                onChange={handleDollar}  // Update dollar amount state on change
              />
            </label>
          </Container>

          <Container className="my-3 p-3 bg-info bg-light">
            <Form>
              <label for = "asset-allocation">Choose Asset Allocation</label>
              <select id = "asset-allocation" value={selectedType} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="aggressive">Aggressive (80% stocks, 20% bonds)</option>
                <option value="balanced">Balanced (60% stocks, 40% bonds)</option>
                <option value="conservative">Conservative (40% stocks, 60% bonds)</option>
              </select>
            </Form>
            <p>Selected Type: <em><strong>{selectedType}</strong></em></p>
          </Container>

          {/* Display ETF allocation results.*/}
          <Container>
            <h2>ETF Allocation Results</h2>
            <ul>
              {etfData.map((etf, index) => (
                <li key={etf.id}>
                  <strong>{etf.ticker} ({etf.assetClass})</strong>: 
                  {/* if both dollarAmount and assetAllocation are true, show $ amounts up to two decimal points*/}
                  ${dollarAmount && assetAllocation ? 
                    (dollarAmount * (assetAllocation[index])).toFixed(2) 
                    : '0.00'}
                  </li>
              ))}
            </ul>
            <p>Total Expense Ratio is {expense}%</p>
            <Button variant="primary" onClick={handleSubmit}>Calcuate Total Fund Expense</Button>
          </Container>

          <Container>
            <CreatePieChart data={pieData} />
          </Container>

    </Container>
  );
};

export default App;