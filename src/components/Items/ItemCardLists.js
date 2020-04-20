import React  from 'react';
import products from '../../utils/product';
import ItemCard from 'components/Items/ItemCard';


const ItemCardLists = () => {
    return (
        <div>
            {
                products.map( product =>{
                    return(
                        <div className="dib pa2 ma3 fl w-30" key={product.id}>
                            <ItemCard product= {product}/>
                        </div>
                    )
                })
            }
        </div>

    );
}

//class vs founction
export default ItemCardLists;
