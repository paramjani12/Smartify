import React, {useState} from 'react'
import './loan.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


let uinvest, uyear, urate, uTotalInvestment, fTotalInvestment, fTotalInterest,uAmount,  fAmount, mTotalInvestment, mTotalInterest, mAmount;

let a = new Array(2); for (let i=0; i<2; i++) a[i] = 0;



const Interest = () => {

    const [option, setOption] = useState(false);

    const [invest, setInvest] = useState("");
    const [year,setYear] = useState("");
    const [rate, setRate] = useState("");
    const [totalInvestment, setTotalInvestment] = useState("");
    const [totalInterest, setTotalInterest] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = () =>{
        uinvest = Number(invest)
        uyear = Number(year)*12
        urate = Number(rate)/12/100

        uTotalInvestment = uinvest*uyear;

        uAmount = uinvest*((((1+urate)**uyear) - 1)/urate)*(1+urate)

        fTotalInvestment = Math.floor(uTotalInvestment)
        mTotalInvestment = fTotalInvestment.toLocaleString("en-US")
        fAmount = Math.floor(uAmount);
        mAmount = fAmount.toLocaleString("en-US")
        fTotalInterest = fAmount - fTotalInvestment;
        mTotalInterest = fTotalInterest.toLocaleString("en-US")
        setTotalInvestment(mTotalInvestment);
        setTotalInterest(mTotalInterest);
        setAmount(mAmount);
        setOption(true);
        a[0]=fTotalInterest;
        a[1]=fTotalInvestment;
    }


    const data = {
        labels: ['Expected Returns', 'Principle Amount'],
        datasets: [
          {
            label: 'Amount',
            data: a,
            backgroundColor: [
              'rgba(255,0,0,0.5)',
              'rgba(0,0,255,0.5)',
            ],
            borderColor: [
              'rgba(255,0,0,1)',
              'rgba(0,0,255,1)',
            ],
            borderWidth: 1.2,
          },
        ],
      };
    

      const handleReset = () =>{
        setOption(false);
        setInvest("");
        setYear("");
        setRate("");
        setTotalInvestment("");
        setTotalInterest("");
        setAmount("");

      }
    

  return (
    <>
    <div className='body'>
    <div className="wrapper">
        <h2>SIP Calculator</h2>
        <span className="div-bar"></span>
        <div className="calculator">
            <div className="calculator-input">
                <label for="">Monthly Investment(Rs.):</label>
                <input type="number" id="loan_amount" 
                    value={invest}                           
                   onChange={(e) => {
                   setInvest(e.target.value);
                }}
                />
            </div>
            <div className="calculator-input">
                <label for="">Time Period (Year):</label>
                <input type="number"
                value={year}
                id="loan_tenure"
                    onChange={(e) => {
                    setYear(e.target.value);
                    }}
                />
            </div>
            <div className="calculator-input">
                <label for="">Expt. Annual Returns (%):</label>
                <input type="number" id="loan_interest"
                value={rate}
                    onChange={(e) => {
                    setRate(e.target.value);
                    }}
                />
            </div>
            <div className="calculator-input1">
                <button className="calculator-btn" onClick={handleSubmit}>Calculate</button>
                <button className="calculator-btn" onClick={handleReset}>Reset</button>

            </div>
        </div>

        <div className="calculator-result">
                {option? <Pie data={data} /> : null}
                      
            <ul>
                <li>Total Investment: {totalInvestment} </li>
                <li>Estimated Returns: {totalInterest}</li>
                <li>Total Amount: {amount}</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Interest