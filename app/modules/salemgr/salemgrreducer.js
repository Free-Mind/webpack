const product = (state,action) => {
    switch (action.type){
        case "ADD_PRODUCT":
            return {
                key:action.key,
                name: action.name,
                price:action.price,
                deleted:false
            };
        case "DELETE_PRODUCT":
            if(state.key != action.key)
                return state;
            else{
                return Object.assign({},state,{deleted:true});
            }
        case "UPDATE_PRODUCT":
            if(state.key != action.key){
                return state;
            }else{
                return Object.assign({},state,
                    {
                        key:action.key,
                        name:action.name,
                        price:action.price,
                        deleted:action.deleted
                    })
            }
        default:
            return state;
    }

}

const products = (state = [],action) => {
    switch (action.type){
        case "ADD_PRODUCT":
            return [
                ...state,
                product(undefined,action)
            ];
        case "SHOW_PRODUCT":
            return state;
        case "DELETE_PRODUCT":
            return state.map(t => product(t,action));
        case "UPDATE_PRODUCT":
            return state.map(t => product(t,action));
        default:
            return state;
    }
}
export default products