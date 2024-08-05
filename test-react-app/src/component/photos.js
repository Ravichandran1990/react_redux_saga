import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {getPhotosFetch } from '../reducers/photosReducers';
import {GET_PHOTO_FETCH} from '../action/test_action';

function Photos() {
    const dispatch = useDispatch();
    const photoSelector = useSelector((state) => state.sagaStore.photos);

    useEffect(() => {
        // dispatch(getPhotosFetch());
        dispatch({type: GET_PHOTO_FETCH});
    }, [dispatch]);
    return (
        <>
            <h1>Photos List</h1>
            {photoSelector.map((photo) => 
                <div key={photo.id}>
                    <img alt={photo.title} src={photo.url} />
                </div>
            )}
        </>
    )
}

export default Photos;