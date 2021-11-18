import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu.js'
import GalleriesList from './Components/GalleriesList'
import {Route,Routes} from 'react-router-dom';
import ArtsList from './Components/ArtsList';
import ShowAllArts from './Components/ShowAllArts';
import Home from './Components/Home';
import AddArt from './Components/AddArt';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div className ="container">
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='galleries' element={<GalleriesList />} />
          <Route path='gallery/:galleryId' element={<ArtsList />} />
          <Route path='arts' element={<ShowAllArts />} />
          <Route path='add-art' element={<AddArt/>} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;
