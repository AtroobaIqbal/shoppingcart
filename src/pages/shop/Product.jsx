import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='product'>
        <img src={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn'onClick={() => addToCart(id)}  >Add to cart</button>
    </div>
  )
}
