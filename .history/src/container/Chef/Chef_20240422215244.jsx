import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className=' app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>

    </div>
  </div>
);

export default Chef;
