import {
    IS_LOADING_ARTS,
    GET_ARTS_SUCCESS,
    GET_ARTS_FAILED,
    DELETE_ART
} from './actionTypes';

 const getArtsByGalleryId = (galleryId) => {
    return (dispatch) => {
        dispatch({ type: IS_LOADING_ARTS });

        fetch(`http://127.0.0.1:3001/galleries/${galleryId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response has an issue')
                }
                return response.json()
            })
            .then((data) => dispatch({
                type: GET_ARTS_SUCCESS,
                payload: {
                    data: data.arts
                }
            }))
            .catch(e => dispatch({ 
                type: GET_ARTS_FAILED, 
                payload: { error: e } 
            }));
    }
}
const getAllArts = () => {
    return (dispatch) => {
        dispatch({ type: IS_LOADING_ARTS });

        fetch(`http://127.0.0.1:3001/arts`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response has an issue')
                }
                return response.json()
            })
            .then((data) => dispatch({
                type: GET_ARTS_SUCCESS,
                payload: {
                    data
                }
            }))
            .catch(e => dispatch({ 
                type: GET_ARTS_FAILED, 
                payload: { error: e } 
            }));
    }
}


export const deleteArts = (artid) => {
    return (dispatch) => {
        dispatch({ type: DELETE_ART });

       fetch(`http://localhost:3000/arts/${artid}`, { method: "DELETE" })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response has an issue')
                }
                return response.json()
            })
            .then((data) => dispatch({
                type: DELETE_ART,
                payload: {
                    data
                }
            }))
            
    }
}

export{getArtsByGalleryId,getAllArts}
