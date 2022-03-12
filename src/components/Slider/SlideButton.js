import React from 'react';
import sliderArrow from '../../assets/slider_arrow.png'
import './SlideButton.scss'

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
     <img src={sliderArrow} alt="slider Arrow" />  
    </span>
  </button>
);

export default SlideButton;