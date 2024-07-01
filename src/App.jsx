import './App.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';





function App() {

  const [height, setHeight] = useState(0);
  const [weight, setweight] = useState(0);
  const [bmi, setbmi] = useState(0);
  const [result, setResult] = useState('');

const handleReset = ()=>{
  setHeight(0);
  setweight(0);
  setbmi(0);
  setResult('');
 
}

const calculate = ()=>{

  let str = ''
  let height_m = height/100
  let bmi = weight/(height_m**2)
  setbmi(bmi.toFixed(2))
  if(bmi < 18.5){
    str = 'Underweight'
    }
    else if(bmi >= 18.5 && bmi < 24.9){
      str = 'Normal weight'
      }
      else if(bmi >= 25 && bmi < 29.9){
        str = 'Overweight'
        }
        else if(bmi >= 30){
          str = 'Obese'
          }
          setResult(str)
          }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='bg-light m-5 p-5 rounded ' style={{width:'500px'}}>
            <h1 className='text-center mb-4'>BMI Calculator</h1>
            <p className='text-center mb-4 '>Body mass index is a measure of body fat based on height and weight that applies to adult men and women.</p>
            <div className='text-center fw-bolder '>
            <p>BMI Categories : Underweight  = &lt; 18.5 </p>
            <p>Normal weight = 18.5 – 24.9</p>
            <p>Overweight = 25 – 29.9</p>
            <p>Obesity = BMI of 30 or greater</p>
            </div>

            <div className='mt-5 flex-column rounded-5 bg-info shadow d-flex justify-content-center align-items-center p-3' >
            <h3 className='fs-1 fw-bolder text-light'>{bmi}</h3>
            <h2 className='text-danger fw-bolder fs-2'>{result}</h2>
            </div>

            <form className='mt-5' onSubmit={(e) => e.preventDefault()}>
            <div className='mb-3'>
            <TextField id="outlined-basic" value={height || ""} label="Height in Cm" name='principle' type="number"  InputLabelProps={{
                   shrink: true,
                      }}  variant="outlined" className='w-100' onChange={(e)=>setHeight(e.target.value)} />
            
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" value={weight || ""} label="Weight in KG" name='principle'  variant="outlined" className='w-100' type="number"  InputLabelProps={{
                   shrink: true,
                      }} onChange={(e)=>setweight(e.target.value)}/>

            </div>
            <div className='d-flex justify-content-between w-100 mt-4'>
            <Button variant="contained" color='secondary' style={{width:'190px',height:'50px'}} onClick={calculate} >Calculate</Button>
            <Button variant="contained" className='bg-secondary' style={{width:'190px',height:'50px'}} onClick={handleReset}>Reset</Button>
            </div>
            </form>

   
            
            
        </div>
    </div>
    </>
  )
}

export default App
