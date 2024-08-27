
import { useState } from 'react'
import Cell from './Cells'

function GridLight() {
    const [isdeactivating, setIsdeactivating] = useState(false)
    const [order , setOrder] = useState([])


    const deActivateCells = () => {
        setIsdeactivating(true)
        const timer = setInterval(()=> {
            setOrder((prev) => {
                const newOrder = [...prev]
                newOrder.pop();
                if(newOrder.length === 0){
                    clearInterval(timer)
                    setIsdeactivating(false)
                }
                return newOrder;
            })

        },400)
        
    }

    const activateCell = (index) => {
        const newOrder = [...order , index]
    
      setOrder(newOrder)
      console.log(newOrder)
      
      if(newOrder.length === config.flat(1).filter(Boolean).length){
        console.log("filled")
        deActivateCells()
      }

    }


    const config = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]

  return (

    <div  className=' w-full h-screen flex flex-col justify-center items-center'>
        <div className=' grid gap-5 w-[50%] h-[50%] border border-black p-10'
        style={{gridTemplateColumns: `repeat(${config[0].length},1fr)`,gridTemplateRows:`repeat(${config.length},1fr)`}}
        >
           { config.flat(1).map((value,index) => {
                return value ? <Cell key={index}
                Filled = {order.includes(index)} 
                onClick = {() => activateCell(index)}
                isDisabled = {order.includes(index) || isdeactivating}
                /> : <span />
           })
             }
        </div>


    </div>
  )
}

export default GridLight
