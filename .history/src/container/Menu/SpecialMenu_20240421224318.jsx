import React from 'react';

import './SpecialMenu.css';
import { SubHeading,MenuItem  } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_item'>
          {data.wines.map((wine,index)=>(
            <p>{wine.title}</p>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu img"/>
      </div>

      <div className='app__specialMenu-menu_coktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_item'>
          {data.cocktails.map((coktail,index)=>(
            <p>{coktail.title}</p>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default SpecialMenu;
