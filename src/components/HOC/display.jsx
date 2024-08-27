import React from 'react'

// function display(props) {

//   return (
//     <div className=' flex flex-col gap-5'>
//        <span className='text-black'>{props.timestamp}</span>
//        <span>{props.message}</span>
//     </div>
//   )
// }

// export default display


function display({data,loading, error}) {
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error:</p>
 
    return (
      <div className=' flex flex-col gap-5'>
         <span className='text-black'>{props.timestamp}</span>
         <span>{props.message}</span>
      </div>
    )
  }
  
  export default display