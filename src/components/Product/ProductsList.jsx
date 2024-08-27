import React from 'react'

function ProductsList({data}) {

  return (
    <div>
        <table className='w-[80%] flex flex-col '>
            <tr className=' w-full h-96 flex gap-3 items-center'>
              <td><img className=" h-32" src={data.image} alt={data.description} /></td>
              <td>{data.title}</td>
            </tr>
        </table>
        
    </div>
  )
}

export default ProductsList
