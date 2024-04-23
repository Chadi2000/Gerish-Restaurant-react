import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price,tags}) => (
  <div className='app__menuItem'>
    <div className='app__menuitem-line'>
      <h4 className='headtext__cormorant'>{title}</h4>
      <div className='app__menuItem-line1_row'></div>
      <p>{price}</p>
    </div>
    <div className='app__menuItem-line2'>
      {tags}
    </div>
  </div>
);

export default MenuItem;
