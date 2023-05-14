import React, {useState} from 'react'
import './loan.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


let uamount, uyear, urate, uemi, utotal, uinterest, femi, ftotal, finterest, memi, mamount, minterest, mtotal;

let a = new Array(2); for (let i=0; i<2; i++) a[i] = 0;



const Loan = () => {

    const [option, setOption] = useState(false);

    const [amount, setAmount] = useState("");
    const [year,setYear] = useState("");
    const [rate, setRate] = useState("");
    const [emi, setEmi] = useState("");
    const [finalAmount, setFinalAmount] = useState("");
    const [total, setTotal] = useState("");
    const [interest, setInterest] = useState("");


    const handleSubmit = () =>{
        uamount = Number(amount)
        uyear = Number(year)*12
        urate = Number(rate)/12/100

        uemi = ((uamount * urate * (1+urate)**uyear)/(((1+urate)**uyear)-1));
        utotal = uemi * uyear;
        uinterest = utotal - uamount;
        femi = Math.floor(uemi)
        memi = femi.toLocaleString("en-US")
        ftotal = Math.floor(utotal)
        mtotal = ftotal.toLocaleString("en-US")
        finterest = Math.floor(uinterest)
        minterest = finterest.toLocaleString("en-US")

        mamount = uamount.toLocaleString("en-US")

        setEmi(memi);
        setFinalAmount(mamount);
        setTotal(mtotal);
        setInterest(minterest);
        setOption(true);
        a[0]=finterest;
        a[1]=uamount;
    }


    const data = {
        labels: ['Interest', 'Principle Amount'],
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
        setAmount("");
        setYear("");
        setRate("");
        setEmi("");
        setFinalAmount("");
        setTotal("");
        setInterest("");
      }
    

  return (
    <>
    <div className='body'>
    <div className="wrapper">
        <h2>Loan/EMI Calculator</h2>
        <span className="div-bar"></span>
        <div className="calculator">
            <div className="calculator-input">
                <label for="">Loan Amount (Rs.):</label>
                <input type="number" id="loan_amount" 
                    value={amount}                           
                   onChange={(e) => {
                   setAmount(e.target.value);
                }}
                />
            </div>
            <div className="calculator-input">
                <label for="">Loan Tenure (Year):</label>
                <input type="number"
                value={year}
                id="loan_tenure"
                    onChange={(e) => {
                    setYear(e.target.value);
                    }}
                />
            </div>
            <div className="calculator-input">
                <label for="">Interest Rate (%):</label>
                <input type="number" id="loan_interest"
                value={rate}
                    onChange={(e) => {
                    setRate(e.target.value);
                    }}
                />
            </div>
            <div className="calculator-input1">
                <button className="calculator-btn" onClick={handleSubmit}>Calculate EMI</button>
                <button className="calculator-btn" onClick={handleReset}>Reset</button>

            </div>
        </div>

        <div className="calculator-result">
                {option? <Pie data={data} /> : null}
                      
            <ul>
                <li>Monthly EMI: {emi} </li>
                <li>Principle Amount: {finalAmount}</li>
                <li>Interest: {interest}</li>
                <li>Total Amount to be paid: {total}</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Loan