import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux';
import { deleteArt, getArtsByGalleryId} from '../Actions/artsActions';
import Art from './Art';

const ArtsList = ({ getArts, arts}) => {

    const params = useParams();

    const dispatch = useDispatch();

    const  handleDelete=(id) =>{
        let d = window.confirm("Are you sure you want to delete the art ?");
           if (d === true) {
               deleteArt(id)
       }
       window.location.reload(`http://localhost:3000/gallery/${params.galleryId}`)
   };

    useEffect(() => {
        getArts(+params.galleryId);
    }, []);

    return (
        <div className="row">
            
            {arts.map(item => 
            <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                    <Art art={item} collection />
                    <div className="card-footer bg-white">
                        <button className="btn btn-outline-secondary" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                </div>
            </div>
            )}
            
        </div>
    );
};

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