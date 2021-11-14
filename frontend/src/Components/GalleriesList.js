import React from 'react';
import { fetchGalleries} from '../Actions/galleriesActions';
import { connect } from 'react-redux';
import "./GalleriesList.css";
import Gallery from './Gallery';

class GalleriesList extends React.Component {
    componentDidMount() {
        this.props.loadGalleries();
    }
   
    displayGalleries() {
        return (  
                this.props.galleries.map(gallery => 
               <Gallery key={gallery.id} gallery={gallery} />
        
        
           
            )
        )
    }

    render() {
        const { isLoading, error } = this.props;
        return (
            <div className="row">
                {isLoading && <h1>Loading</h1>}
                {error && (
                    <div className="alert alert-danger" role="alert">
                        Sorry! Encountered an error while fetching galleries.
                    </div>
                )}
                {this.displayGalleries()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      isLoading: state.galleryReducer.loading,
      galleries: state.galleryReducer.galleries,
      error: state.galleryReducer.error
    }
  }


  const mapDispatchToProps = (dispatch) => {
  return {
      
    loadGalleries: () => dispatch(fetchGalleries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleriesList);