import React, { useEffect, useState } from 'react'

function ProgressBar({value = 0 }) {

    // const [percent , setPercent] = useState(value)

    
    // useEffect(() => {
    //     setPercent(value)
    // },[value])

  return (
    <>
     <div className=' w-[90%] relative  left-[5%] flex flex-col items-center pt-5'>
        <h1>Progress bar</h1>
        <div className={`w-full h-6 bg-slate-300 mx-5 rounded-xl my-3  overflow-hidden ${(value > 49) ? " text-white" : " " }`}>
            <span className=' w-full absolute flex  justify-center items-center '>{value}%</span>
            <div 
            role='progressbar'
            aria-valuemin={0}
            aria-valuenow={value}
            aria-valuemax={100}
            className={ `bg-green-500 h-6 ` }  style={{width :`${value}%`}}/>
            
        </div>
        
     </div>
    </>
   
  )
}

export default ProgressBar
