import React from 'react';

const Header = (props) => {
  console.log(props, 'header');

  return (
    <div className='header'>
      <div className='header__title'>
        My Wather
      </div>
      <div className='header__subtitle'>
        Find out the weather and add a card
      </div>
    </div>
  );
};

export default Header;