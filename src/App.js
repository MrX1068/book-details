import React, { Component } from 'react';
import Slider from './components/Slider'
import './App.scss'
import Header from './components/Header/header';
import Home from './components/Home/Home';
import Books from './books.json'

class App extends Component {
  render() {
    return (
      <>
              <Header/>
              <Home/>
      <div className="app">
       <h2>Hardcover Fiction</h2>
        <Slider>
        
          {Books.results.books.map(book => (
            <Slider.Item book={book} key={book.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
      </>
    );
  }
}

export default App;
