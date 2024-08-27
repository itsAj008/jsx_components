
import { useEffect, useState } from "react";
import Products from "./components/Products";
import ProgressBar from "./components/ProgressBar";

import Grid_60 from "./components/grid_60";

import GridLight from "./components/GridLight";

import FileExplorer from "./components/fileExplorer";
import ProductWIthThrottle from "./components/ProductWIthThrottle";

import HigherOC from "./components/HOC/HigherOC";
import display from "./components/HOC/display";

import Circle from "./components/circle/Circle";

import Carosule from "./components/carosule/Carosule";
import FAQ from "./components/accordian/FAQ";


import Products1 from './components/Product/Products1'
export default function App() {
  // const[value ,setValue] = useState(0)
  // const [success , setSuccess] = useState(false)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //       setValue((prev) =>{
  //         if(prev >=99) {
  //           clearInterval(intervalId);
  //           setSuccess(true)
  //           return 100;
  //         }
  //         return prev + 1;
  //       })
  //   },100)
  //   return () => clearInterval(intervalId);
  // },[])
 
  // className=" h-screen bg-slate-100 w-full "

  const EnhancedDisplay = HigherOC(display)


  return (
    <div >
       <Products />
       {/* <ProductWIthThrottle /> */}
       {/* <ProgressBar value={value} />
       <div className=" w-full flex justify-center">
         {!success ? <p>Loading...</p> : <p>Completed!</p>}
       </div> */}

       {/* <GridLight /> */}

       {/* <FileExplorer /> */}

       {/* <Grid_60 /> */}

       {/* <Products1 /> */}

       {/* <EnhancedDisplay message="you can see my curced technique, don't you? Maharagha" /> */}
       <Circle />
      
       {/* <Carosule /> */}
       {/* <FAQ /> */}

    </div>
  );
}
