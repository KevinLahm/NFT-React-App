import React from 'react';
import GalleriesDropdown from "./GalleriesDropdown"
import { addArt } from '../Actions/artsActions';

export default class ArtNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      description: '',
      gallery: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleGalleryChange = this.handleGalleryChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleNameChange(e) {        
    e.preventDefault();
    this.setState({
      name: e.target.value
    })  
  }

  handleDescriptionChange(e) {        
    e.preventDefault();
    this.setState({
      description: e.target.value
    })  
  }

  handlePriceChange(e) {        
    e.preventDefault();
    this.setState({
      price: e.target.value
    })  
  }

  handleGalleryChange(e) {        
    e.preventDefault();
    this.setState({
      gallery: e.target.value
    })  
  }

  onFormSubmit(e) {
    e.preventDefault();
    addArt(this.state)
    window.location.replace(`http://localhost:3000/add-art`)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" aria-describedby="name" onChange={this.handleNameChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" step="0.01" className="form-control" name="price" onChange={this.handlePriceChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label><br/><br/>
          <textarea name="description" className="form-control" onChange={this.handleDescriptionChange}></textarea>
          
        </div>
        <div className="mb-3">
          <label  className="form-label">Select Gallery</label>
          <select className="form-select" aria-label="Default select example" name="gallery" onChange={this.handleGalleryChange}>
          <GalleriesDropdown/>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    );
  }
}