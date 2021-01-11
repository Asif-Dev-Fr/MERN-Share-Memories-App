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