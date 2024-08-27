import React, { useState } from 'react'

function Accordian({d}) {
    const [show, setShow] = useState(false)
  return (
    <>
        <div className=' text-white bg-blue-400 p-2 rounded-md '>
            <div className=' flex justify-between'>
                {d.question}
                <button onClick={() => setShow(prev => !prev)}>🔽</button>
            </div>

            <div className={`ml-2 text-sm grid overflow-hidden transition-all 300ms ease-in-out ${show ? " grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`}>
                <div className=' overflow-hidden'>
                   {d.answer}
                </div>
               

            </div>

        </div>

        
    </>
    
  )
}

export default Accordian
