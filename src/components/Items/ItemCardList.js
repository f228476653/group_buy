import React,  { useEffect }  from 'react';
import ItemCard from 'components/Items/ItemCard';
import { itemActions } from '../../actions/item.actions';
import { useDispatch, useSelector } from 'react-redux';



function ItemCardLists(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.getAllItemsReducer.items);
    useEffect(()=>{
        dispatch(itemActions.getAllItems('id'))
    },[])
    console.log(products)
    return (
        <div>
            { products instanceof Array && 
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
