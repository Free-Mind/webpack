import React,{ Component } from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.less'

class Salemgr extends Component{

	render() {
        const products = this.props.products;
        const columns = [{
            title: '商品编码',
            dataIndex: 'key',
            key: 'key',
        }, {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        }, {
            title: "操作",
            key: "action",
            render: (text, record) => (
                <span>
                    <a>删除</a>
                </span>
            )
        }
        ];
        return (
            <Table dataSource={products} columns={columns}/>
        )
    }
}
export default Salemgr
