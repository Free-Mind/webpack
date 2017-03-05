import { connect } from 'react-redux'
import Salemgr from './salemgr'

const getUndelectedProducts = products => {
	return products.filter(product => !product.deleted);
}

const mapStateToProps = (state) => {
    return {
        products: getUndelectedProducts(state)
    }
}

export default connect(mapStateToProps,null)(Salemgr);