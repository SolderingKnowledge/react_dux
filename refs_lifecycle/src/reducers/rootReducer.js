const initState = {
    posts:[
        {id: 1, title:"Hello there"},
        {id: 2, title:"Zdrasti"},
        {id: 3, title:"Hola"},
    ]
}
const rootReducer = (state=initState, action)=>{
    // if(action.type){
    //     return state.posts
    // }
    return state.posts;
}

export default rootReducer;