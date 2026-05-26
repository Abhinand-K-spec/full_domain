import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        let fetched = async()=>{
          let res = await fetch("https://dummyjson.com/products");
          if(!res.ok) return;
          let data = await res.json();

          console.log(data);
          
          setProduct(data.products);
        }

        fetched();
    },[])


  return (
    <div>
      <ul>
        {product.map((p)=>(
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fetch

