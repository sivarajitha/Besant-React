import React, { useState } from 'react'

const InterestCalculator = () => {
    const [p,setP]=useState(0);
    const [t,setT]=useState(0);
    const [r,setR]=useState(0);
    const [i,setI]=useState(0);

    
    const ClickToClaculate=()=>{
        const result=((p*t*r)/100)
        setI(result);
    }
    
  return (
    <div>
        <div><h1>Simple Interest Calculator</h1></div>
        <div>
          P:  <input type='number' className='border-2 rounded m-3' 
          onChange={e=>
            {setP(e.target.value)}
            }/>
        </div>
        <div>
          T:  <input type='number' className='border-2 rounded m-3'
           onChange={e=>
            {setT(e.target.value)}
            }/>
        </div>
        <div>
         R:   <input type='number' className='border-2 rounded m-3'
          onChange={e=>
            {setR(e.target.value)}
            }/>
        </div>
        <div>
         Interest: <div><h1>{i}</h1></div>  
        </div>
        <div>
         Total: <div><h1>{parseInt(p)+parseInt(i)}</h1></div>  
         <button onClick={ClickToClaculate} className='border-2 rounded m-3'>Calculate</button>
        </div>
    </div>
  )
}

export default InterestCalculator