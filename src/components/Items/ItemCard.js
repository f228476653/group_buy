import React from 'react';


const ItemCard = ({ product }) => {
    return (
      <div className={product.status}>
        <article className="br2 ba dark-gray b--black-10 mv4">
          <img src={product.image} className="db w-100 br2 br--top" alt="12"></img>
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">{product.name}</h1>
              </div>
              <div className="dtc tr">
                <h2 className="f5 mv0">{product.price}</h2>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              {product.description}
            </p>
          </div>
        </article>
      </div>
    );
}

//class vs founction
export default ItemCard;