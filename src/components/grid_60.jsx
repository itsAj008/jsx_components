
import GridCell from './GridCell'
import { useEffect, useState } from "react"


function Grid_60() {

    const [arr,setArr] = useState(Array(60).fill(1))
    const [index ,setIndex ] = useState(0)

    const activateCell = () => {
        const timer = setInterval(()=>{
            if(index < arr.length ){
                setArr((prev) => {
                    const newArr = [...prev]
                    newArr[index] = 0
                    return newArr
                })
                setIndex((prev) => prev + 1);
            }else{
                setArr(Array(60).fill(1))
                setIndex(0)
                clearInterval(timer)
            }
        },100)
       return timer
    }

    // function ddd(){
    //     const intervalId = setInterval(() => {
    //         activateCell(intervalId)
    //     },300)

    //     return intervalId
    // }

    useEffect(()=> {
        let intervalId = activateCell()
        return () => clearInterval(intervalId);
    },[index])


  return (
       <div className='w-full h-screen flex flex-col justify-center items-center bg-slate-200'>
            <div className=' w-[70%] h-[90%]  grid gap-1 p-3  border border-black ' style={{gridTemplateColumns:'repeat(10, 1fr)',gridTemplateRows:'repeat(6, 1fr)'}}>

                {arr.map((value,i) => (
                    <GridCell key={i} isFilled ={!!value} />
                ))}
            </div>

        </ div>
      

  )
}

export default Grid_60
