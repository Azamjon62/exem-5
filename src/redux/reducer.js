const INITIAL__STATE = {
    post: [],
    load: true,
    errorMessage: "",
    postItem: null
}

export const reducer = (state=INITIAL__STATE, action) => {
    switch (action.type) {
        case "GET_ALL" : return {...state, post: action.payload}
        case "LOAD" : return {...state, load: false}
        case "ERROR" : return {...state, errorMessage: action.payload}
        case "ITEM" : return {...state, postItem: action.payload}
        default: return state
    }
}