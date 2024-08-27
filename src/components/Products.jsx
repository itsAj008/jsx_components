
import { useEffect, useState } from "react";

export default function Products() {
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [page , setPage] = useState(1)
  const[total , setTotal] = useState(0)

  const fetchProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    setProductsData(data.products);
    console.log(data.products);
  };

  useEffect(()=> {
    setTotal(cartItems.reduce((acc,curr) => (
               acc + curr.price * curr.qty
              ),0).toFixed(2)
            )

  },[cartItems])

  const handlePageChange = (page) => {
      
    if((page >=1) && page <= productsData.length/10)  {
      setPage(page);
    }
  }

  const AddToCart = (item) => {
    setCartItems((prev) => [ ...prev ,{
      id:item.id,
      title:item.title,
      thumbnail:item.thumbnail,
      price:item.price,
      qty:1
    } ])
    console.log(cartItems)
  }

  const removeFromCart = (id) => {
     setCartItems((prev) => prev.filter((p) => p.id !== id))
  }

  const updateQuantity =(item , qty)=>{
    setCartItems(prev => prev.filter(p => p.id === item.id ? p.qty = qty: p.qty))
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="  bg-slate-200 w-full ">
      <h1 className=" text-3xl text-gray-500 text-center p-5">Products</h1>
        <div className="flex gap-3 items-start">
          {productsData.length > 0 && (
            <div className=" flex flex-wrap gap-3 w-[80%] justify-center mr-36 ">
              {productsData.slice(page * 10 - 10 , page *10).map((item) => (
                <span key={item.title} className="flex flex-col bg-gray-700 text-white text-center w-52 ">
                  <img  className=" w-full h-[95%] bg-gray-300 object-cover" src={item.thumbnail} alt={item.title} />
                  <div className=" flex justify-between mx-2">
                    <span className=" text-sm py-1"> {item.title} </span>
                    <span className=" text-sm py-1"> {item.price} </span>
                  </div>
     
                  {cartItems.some((i) => i.id === item.id) ? (<button className=" bg-red-500 py-1 text-sm cursor-pointer hover:bg-red-400 " onClick={() => removeFromCart(item.id)} >Remove from cart</button>)
                  :( <button className=" hover:bg-green-400 cursor-pointer bg-green-500 py-1 text-sm" onClick={() => AddToCart(item)}>Add to cart</button>)}
                  
                </span>
              ))}
            </div>
          )}

          <div className=" bg-transparent  w-28 hover:w-44 h-screen absolute right-0 group transition-all duration-500">
              <p className=" text-center text-gray my-1  text-lg" >cart</p>
              <p className=" text-center text-gray my-1  text-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150 " >  total : {total}</p>

              {cartItems.length > 0 && (
                 <div className="w-full flex flex-col  opacity-0 group-hover:opacity-100 group-hover:w-44 transition-opacity gap-2">
                    {cartItems.map((item) => (
                       <span key={item.title} 
                             className="flex  pl-2 h-20 rounded-md bg-slate-600 text-white w-full items-center">
                            <img  className=" w-20 bg-gray-600 object-cover" src={item.thumbnail} alt={item.title} />
                            {/* <span className=" text-xs py-1"> {item.title} </span> */}
                            <div className=" bg-slate-400 p-1 rounded-md flex flex-col gap-1  ">
                                <button className=" px-2 py-1 mx-2 rounded-md text-xs bg-red-500 "  onClick={() => removeFromCart(item.id)}>Remove</button>
                                <div className="flex text-white justify-center items-center gap-2 ">
                                  <span className=" hover:text-red-500 cursor-pointer text-lg"
                                  onClick={()=> updateQuantity(item , item.qty-1)}>-</span>
                                  <span className=" text-sm">{item.qty}</span>
                                  <span className="  hover:text-green-500 cursor-pointer text-lg " onClick={()=> updateQuantity(item , item.qty+1)}>+</span>
                                </div>
                            </div> 

                       </span>
                    ))}
                 </div>
                )}
          </div>
        </div>

        { productsData.length > 0 && <div className=" flex justify-center p-5"> 
          <span onClick={() => handlePageChange(page - 1)} className={`px-4 py-2 border border-gray-700 cursor-pointer ${(page > 1) ? "": " opacity-0"}`} >◀️</span>
          {[...Array(productsData.length/10)].map((_,i)=> (
              
              <span className={`px-4 py-2 border border-gray-400 cursor-pointer ${(page === i+1)? " bg-gray-300" : ""}` }key={i} onClick={() => handlePageChange(i +1)}>{i+1}</span>

          ))}
          <span className= {`px-4 py-2 border border-gray-700 cursor-pointer ${(page < productsData.length/10) ? "": " opacity-0"}`} onClick={() => handlePageChange(page + 1)}>▶️</span>

        </div>
        
        }
    </div>
  );
}
