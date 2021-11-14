import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import {getAllArts } from '../Actions/artsActions';
import Art from './Art';

const ShowAllArts = ({ getArts, arts }) => {
    const params = useParams();

    useEffect(() => {
        getArts();
    }, []);

    return (
        <div className="row">
            
            {arts.map(item => <div key={item.id} className="col">
                <Art art={item} collection />
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