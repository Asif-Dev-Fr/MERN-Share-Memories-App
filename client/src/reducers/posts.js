export default (state = [], action) => {
    switch(action.type) {
        case "FETCH-ALL":
            return action.payload;
            break;
        case "CREATE":
            return state
            break
        default:
            return state   
    }
}