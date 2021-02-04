import * as api from '../api/index';

// Action Creators :
// function fetchPost() was declared in the api file : 
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log(data);

        const action = { type: 'FETCH_ALL', payload: data }
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }
    
};

// we imported everything from the api file as api 
// then we take the function createPost from the api file : api.createPost
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
    
};