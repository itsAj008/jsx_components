import React, { useEffect, useState } from 'react'

function Imageslider({urls}) {
  const [imageNo, setImageNo] = useState(0)

  const handleIChange = () => {
     setImageNo( imageNo >= urls.length - 1 ? 0 : imageNo + 1 )
  }

  const handleDChange = () => {
    setImageNo(imageNo < 0 ? urls.length -1 : imageNo - 1 )
 }


  useEffect(()=> {
    const timmer = setInterval(()=>{
      handleIChange()
    },1000)

    return () => {
      clearInterval(timmer)
    }
  },[imageNo])

  return (
    <div className=' max-w-96 h-56 flex bg-slate-400 mx-auto relative' >
        <div className='w-full h-full flex overflow-hidden' >
            {urls.map((url,idx) => (
                <img key={idx} className='w-full h-full object-fill transition-all 2s linear ' style={{translate:`${-100 * imageNo}%`}} src={url} alt={url} />
            ))}

        </div>

        <button className=' absolute top-0 bottom-0 left-0  hover:bg-slate-700 text-xl' onClick={() => handleDChange}>⬅️</button>
        <button className=' absolute top-0 bottom-0 right-0  text-xl hover:bg-slate-700' onClick={() => handleIChange}>➡️</button >
      
    </div>
  )
}

export default Imageslider
