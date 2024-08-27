import React from 'react'
import Accordian from './Accordian'
import {data} from './data'

function FAQ() {
  return (
    <div className=' w-[70%] h-fit p-4 bg-slate-300 rounded-md mx-auto mt-10 flex flex-col gap-2'>
      {data.map((d,idx) => (
             <Accordian key={idx} d = {d}/>
      ))}
   
    </div>
  )
}

export default FAQ
