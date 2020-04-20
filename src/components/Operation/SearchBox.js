import React from 'react';


const SearchBox = () => {
    return (
        <>
        <div className='pa1'>
          <input
            aria-label='Searcg Robots'
            className='pa2 mr2 ba b--white bg-lightest-blue'
            type='search'
            placeholder='search items'
          />
        </div>
      </>
    );
}

//class vs founction
export default SearchBox;