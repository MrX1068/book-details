import React from 'react';
import closeicon from '../../assets/close.png'
import './Content.scss';

const Content = ({ book, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
       
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__area__container__leftside">
          <div className='content__area__container__leftside__title'>
          {book.title}
          </div>
          <div className='content__area__container__leftside__image'>
            <img src={book.book_image} alt="tile"/>
          </div>
          <div className='content__area__container__leftside__button'>
            <button>Add to favourites +</button>
          </div>
        </div>
        <div className="content__area__container__rightside">
        <div className='content__area__container__rightside__author'>
          {book.author}
          </div>
          <div className='content__area__container__rightside__publisher'>
          {book.publisher}
          </div>
          <div className='content__area__container__rightside__description'>
          {book.description}
          </div>
        </div>
        {/* <div className="content__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div> */}
      </div>
      <button className="content__close" onClick={onClose}>
      <img src={closeicon} alt="closeicon"/>
      </button>
    </div>
  </div>
);

export default Content;
