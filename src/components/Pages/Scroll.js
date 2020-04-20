import React from 'react';

/*
function Sroll () {
    return (
        <>
    )
    
}
*/
const Scroll = (props) => {
    return (
        // render 包在裡面的component
        <div className="flex justify-around" style = {{ overflow: 'scroll' , border: '5px solid black', height: '800px'}}>
            { props.children } 
        </div>
    ) ;
}

export default Scroll;