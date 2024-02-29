import React from 'react'
import './Popular.css'
import data_product from '../Assets/data' // This data is imported from data.js from Assets folder. First, data will come here, then using propers, item will be pass to item component, and item returns in this component.
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item, idx) => {
          console.log({ item });
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
            // The above code  id={item.id}, name={item.name} means adding attribute, so that through this props can be used to list or use data from here.
          );
        })}
      </div>
    </div>
  )
}

export default Popular
