const addproducts = (state = [],action) => {
    switch (action.type){
        case 'ADD_PRODUCT':
            return {
                key: action.id,
                name: action.name,
                price: action.price,
                deleted: action.deleted
            };
        default:
        return state;
    }
}
export default addproducts;