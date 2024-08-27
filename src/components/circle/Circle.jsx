import React, {useEffect, useState} from 'react'

function Circle() {
    const [circles , setCircles] = useState([])
    const [intersect , setIntersect] = useState(false)

    const handleClick = (e) => {
        let radius  = Math.random() *100 + 20;
        const newCircle = {
            x:e.clientX,
            y:e.clientY,
            r:radius
        }
        let newCircles = [...circles,newCircle]
        if(newCircles.length > 2) {
            newCircles = []
            setIntersect(false)
            
        }
        setCircles(newCircles)
    }

    const checkIntercention = () => {
        const distance = Math.sqrt(
            Math.pow(circles[1].x - circles[0].x,2) + Math.pow(circles[1].y - circles[0].y,2)
        )
         distance < circles[0].r + circles[1].r ? setIntersect(true):''


    }

    useEffect(() => {
        if( circles.length === 2)  checkIntercention();
    })


  return (
    <div className= {`w-full h-screen ${!intersect ? 'bg-gray-300' : ' bg-red-400'} `} onClick={handleClick}>
       {circles.map((c) => 
          (
            <div className={ ` absolute bg-green-500 `} style={{
                top:c.y -c.r,
                left:c.x - c.r,
                width:c.r*2,
                height:c.r*2,
                borderRadius:"50%"
            }} />
         )
       ) }
       {intersect && (<div className='absolute top-0 left-0'>Circles intersect </ div>)}
            
        
      
    </div>
  )
}

export default Circle
