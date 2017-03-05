import products from './salemgr/salemgrreducer'
import addproducts from './addproduct/addproductreducer'
import {combineReducers} from 'redux'
import { reducer as formreducer} from 'redux-form'

const rootreducer = combineReducers({
    products: products,
    addproducts: addproducts,
    form: formreducer
});

export default rootreducer;
