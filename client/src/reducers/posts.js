// reducer is a function that accepts the state and the action as arguments 
// the state need to be egal to something, here it's an empty array  
// this is used in reducer/index.js file 
export default (posts = [], action) => {
    switch(action.type) {
        case "FETCH-ALL":
            return action.payload;
            break;
        case "CREATE":
            return [... posts, action.payload]
            break
        default:
            return posts   
    }
}