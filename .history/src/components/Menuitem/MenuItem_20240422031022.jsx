import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price,tags}) => (
  <div className='app__menuItem'>
    <div className='app__menuitem-line'>
      <h4>{title}</h4>
      <div></div>
      <p>{price}</p>
    </div>
    <div className='app__menuitem-line2'>
      <p>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
