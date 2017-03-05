import React,{ Component } from 'react'
import { Field,reduxForm,SubmissionError } from 'redux-form'
import { postProduct } from './addproductactions'
import renderField from './renderField'
/*
class Addproductcomponent extends Component{

    render(){
        const { handleSubmit,submitting,onSubmit} = this.props;
        return(
            <div>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <Field
                        name = "key"
                        type = "text"
                        label = "商品编码"
                        component = {renderField}
                    />

                    <Field
                        name = "name"
                        type = "text"
                        label = "商品名称"
                        component = {renderField}
                    />

                    <Field
                        name = "price"
                        type = "text"
                        label = "商品价格"
                        component = {renderField}
                    />
                    <div>
                        <button type="submit" className="btn ant-btn-primary" disabled={ submitting }>保存</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'Addproductcomponent'
})(Addproductcomponent)
    */
class Addproductcomponent extends Component{

    render(){
        let key,name,price;
        const handleSubmit = this.props.handleSubmit;
        return(
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    let product = {
                        key:key.value,
                        name:name.value,
                        price:price.value,
                        deleted:0
                    };
                    handleSubmit(product);
                    key.value = "";
                    name.value = "";
                    price.value = "";
                }}>
                    <div>
                        <label>商品编码</label>
                        <input ref={node => {
                            key = node
                        }} placeholder="请输入商品主键"/>
                    </div>

                    <div>
                        <label>商品名称</label>
                        <input ref={node => {
                            name = node;
                        }} placeholder="请输入商品名称"/>
                    </div>

                    <div>
                        <label>商品价格</label>
                        <input ref={node => {
                            price = node;
                        }} placeholder = "请输入商品价格"/>
                    </div>
                    <button type="submit" className="ant-brn ant-btn-primary ant-btn-lg">保存</button>
                </form>
            </div>
        )
    }
}
export default Addproductcomponent