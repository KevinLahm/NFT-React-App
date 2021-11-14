import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getArtsByGalleryId} from '../Actions/artsActions';
import Art from './Art';

const ArtsList = ({ getArts, arts }) => {
    const params = useParams();

    useEffect(() => {
        getArts(+params.galleryId);
    }, []);

    return (
        <div className="row">
            
            {arts.map(item => <div key={item.id} className="col">
                <Art art={item} collection />
            </div>)}
            
        </div>
    );
};
const  handleDelete=(id) =>{
         let d = window.confirm("Are you sure you want to delete the art ?");
            if (d === true) {
                 //deleteArtWithDispatch(id)
                window.location.replace('http://localhost:3001/arts')
        }
    }
const mapStateToProps = state => {
    return {
        arts: state.artsReducer.arts,
        isLoading: state.artsReducer.isLoading,
        error: state.artsReducer.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // deleteArtWithDispatch: (artid) => dispatch(deleteArts(id)),
        getArts: (galleryId) => dispatch(getArtsByGalleryId(galleryId))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ArtsList);