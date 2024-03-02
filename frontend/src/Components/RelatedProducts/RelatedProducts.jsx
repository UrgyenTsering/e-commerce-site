import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
const RelatedProducts = () => {
  return (
    <div className='ralatedproducts'>
      <h1>Related Products</h1>
      <div className="relatedproducts-item">
        {data_product.map((item, idx) => {
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
