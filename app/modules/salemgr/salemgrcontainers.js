import { connect } from 'react-redux'
import Salemgr from './salemgr'
import { deleteProduct } from "./actions"
const getUndelectedProducts = products => {
	return products.filter(product => !product.deleted);
}

const mapStateToProps = (state) => {
    return {
        products: getUndelectedProducts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: (key) => {
			dispatch(deleteProduct(key));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Salemgr);