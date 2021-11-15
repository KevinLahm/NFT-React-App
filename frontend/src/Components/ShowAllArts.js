import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import {getAllArts, deleteArt} from '../Actions/artsActions';
import Art from './Art';

const ShowAllArts = ({ getArts, arts }) => {
    const params = useParams();

    const  handleDelete=(id) =>{
        let d = window.confirm("Are you sure you want to delete the art ?");
           if (d === true) {
               deleteArt(id)
       }
       window.location.reload(`http://localhost:3000/arts`)
   };

    useEffect(() => {
        getArts();
    }, []);

    return (
        <div className="row">
            
            {arts.map(item => <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                    <Art art={item} collection />
                    <div className="card-footer bg-white">
                    <button className="btn btn-outline-secondary" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                </div>
            </div>)}
            
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
        getArts: () => dispatch(getAllArts())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowAllArts);