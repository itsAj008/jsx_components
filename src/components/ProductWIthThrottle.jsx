import React, { useEffect, useState } from 'react'

function ProductWIthThrottle() {
  const [productData, setProductData] = useState([])

  const url = 'https://fakestoreapi.com/products'

  const fetchData = async() => {
     const resp = await fetch(url)
     const data = await resp.json()
     console.log(data)
     setProductData(prev => [...prev , ...data])
  }

  useEffect(()=> {
    fetchData()
  },[])


  return (
    <div>
            hi
        
      
    </div>
  )
}

export default ProductWIthThrottle
