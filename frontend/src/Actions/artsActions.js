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

const deleteArt = (artid) => {
    const configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }}

   fetch(`http://localhost:3001/arts/${artid}`, configObj)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response has an issue')
            }
        })
}

export const addArt = (userInput) => {
    let _data = {
        "name": userInput.name,
        "price": userInput.price,
        "description": userInput.description,
        "gallery_id": userInput.gallery,
    }
    const configObj = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(_data)
  }
  
  fetch(`http://localhost:3001/arts`, configObj)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response has an issue')
                }
            })
}

export{getArtsByGalleryId,getAllArts, deleteArt}
