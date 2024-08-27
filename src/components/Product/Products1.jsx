import React, { useState , useEffect} from 'react'
import ProductsList from './ProductsList'

function Products() {
const [data, setData] = useState([])
const [input, setInput] = useState('')
const [cat , setCat] = useState([])
const productsData = async(url) => {

  const resp = await fetch(url)


  const data = await resp.json()
 

  console.log(data)
  setData(data)
}

const fetchCat = async() => {
  const resp2 = await fetch ("https://fakestoreapi.com/products/categories")
  const data2 = await resp2.json()
  console.log(data2)
  setCat(data2)
}

useEffect(()=>{
  productsData("https://fakestoreapi.com/products")
  fetchCat()
},[])

const handleSort = () => {
  productsData(`https://fakestoreapi.com/products/category/${input}`)
}

useEffect(() => {
  handleSort()
},[input])


  return (
    <div className=' w-full h-screen'>
      <div className=' bg-slate-400 p-3 w-[50%] mx-auto flex gap-3'>
        <select className=' w-96 flex flex-col gap-2' value={input} onChange={e => setInput(e.target.value)}>

          {cat.map((c => {
            {console.log(c)}
             return ( <option value={c}>{c}</option>)
          }))}
 
          
        </select>
    
      {/* <button className=' py-1 px-2 bg-green-400 text-white' onClick={handleSort}>search</button> */}

      </div>
    
      
      <div >
        { data.map((p)=>(
              <ProductsList data={p}/>
        ))}
      </div> 
    </div>
  )
}

export default Products
