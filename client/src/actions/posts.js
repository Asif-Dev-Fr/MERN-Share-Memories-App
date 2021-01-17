import * as api from '../api';

// Action Creators :
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();
        console.log(data);

        const action = { type: 'FETCH_ALL', payload: data }
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
    
}