import React, {useState} from 'react'
import './loan.css'






let weightget, heightget, bmi, note;


const BmiPage = () => {



    const [weight, setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [finalBmi, setFinalBmi] = useState("");
    const [finalNote, setFinalNote] = useState("");


    const handleSubmit = () =>{


        weightget = Number(weight)
        heightget = Number(height)/100
        bmi = (weightget/(heightget*heightget)).toFixed(2);
      if(bmi<16){
          note = `You Fall under Severe Thinness category. You should Gain 📈 ${((22-bmi)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.`
      }
      else if(bmi< 17 && bmi >= 16){
          note = `You Fall under Moderate Thinness category. You should Gain 📈 ${((22-bmi)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
      }
      else if(bmi< 18.5 && bmi >= 17){
          note = `You Fall under Mild Thinness category. You should Gain 📈 ${((22-bmi)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
      }
      else if(bmi< 25 && bmi >= 18.5){
          note = `You Fall under Normal category. You have healthy BMI maintain it.👍` ;
      }
      else if(bmi< 30 && bmi >= 25){
          note = `You Fall under Overweight category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
      }
      else if(bmi< 35 && bmi >= 30){
          note = `You Fall under Obese Class I category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
      }
      else if(bmi< 40 && bmi >= 35){
          note = `You Fall under Obese Class II category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
      }
      else if(bmi >= 40){
          note = `You Fall under Obese Class III category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
      }
      setFinalBmi(bmi);
      setFinalNote(note);

    }

    

      const handleReset = () =>{
        setHeight("")
        setWeight("")
        setFinalBmi("")
        setFinalNote("")
      }
    

  return (
    <>
    <div className='body1'>
    <div className="wrapper1">
        <h2>BMI Calculator</h2>
        <span className="div-bar"></span>
        <div className="calculator">
            <div className="calculator-input">
                <label for="">Weight (KG):</label>
                <input type="number" id="loan_amount" 
                    value={weight}                           
                   onChange={(e) => {
                   setWeight(e.target.value);
                }}
                />
            </div>
            <div className="calculator-input">
                <label for="">Height (CM):</label>
                <input type="number"
                value={height}
                id="loan_tenure"
                    onChange={(e) => {
                    setHeight(e.target.value);
                    }}
                />
            </div>
            <div className="calculator-input">
                <button className="calculator-btn" onClick={handleSubmit}>Calculate BMI</button>
                <button className="calculator-btn" onClick={handleReset}>Reset</button>

            </div>
        </div>

        <div className="calculator-result">      
            <ul>
                <li>Your BMI: {finalBmi}</li>
                <li>Insights: {finalNote}</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default BmiPage