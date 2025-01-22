import React from 'react'
import {useState,useEffect} from 'react'
import { fetchProducts } from '../data/ProductData';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const fetchData = async()=>{
          const result = await fetchProducts()
          setProducts(result)
        }
        fetchData()
      }, [])    // Kör EN gång vid sidans laddning

  return (
    <section className="products" id="products">
    <h1 className="heading"> <span>our</span> products </h1>

    <div className="productgallery">
        {
            products.map((theProduct,i)=> <Product key={i} product={theProduct} />    )
        }
    </div>

</section>  )
}

export default Products