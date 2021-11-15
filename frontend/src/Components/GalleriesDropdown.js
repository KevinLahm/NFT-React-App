import React from 'react';
import { fetchGalleries} from '../Actions/galleriesActions';
import { connect } from 'react-redux';

class GalleriesDropdown extends React.Component {
    componentDidMount() {
        this.props.loadGalleries();
    }
   
    displayGalleries() {
        return (  
                this.props.galleries.map(gallery => 
                <option value={gallery.id}>{gallery.title}</option>         
            )
        )
    }

    render() {
        const { isLoading, error } = this.props;
        return (
            <>
                {this.displayGalleries()}
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleriesDropdown);
