import { connect } from 'react-redux'
import Addproductcomponent from './addproductcomponent'
import { addproduct } from './addproductactions'

const mapDispatchToProps = (dispatch) => {
    return{
        handleSubmit: (product) => {
            dispatch(addproduct(product));
        }
    }
};
let Addproductcontainers = connect(null,mapDispatchToProps)(Addproductcomponent);

export default Addproductcontainers
