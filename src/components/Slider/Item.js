import React from 'react';
import cx from 'classnames';
import SliderContext from './context'

import Mark from './Mark'
import './Item.scss'

const Item = ({ book }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === book.id;

      return (
        <div
        onClick={() => onSelectSlide(book)}
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={book.book_image} alt="" />
          <div className='item_rating'>
      <div className='item_rating_final'>{book.rating} out of 5</div>
      </div>
        <div className='item_details'>
      <div className='item_details_title'>{book.title}</div>
      <div className='item_details_author'>{book.author}</div>
      <div className='item_details_publisher'>{book.publisher}</div>
        </div>
         
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
