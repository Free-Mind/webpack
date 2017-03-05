import React,{ Component } from 'react'
import {Table,Popconfirm } from 'antd'
import 'antd/dist/antd.less'

class Salemgr extends Component{

	render() {
        const {products,onDelete} = this.props;
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
            render: (text, record,index) => (
                <Popconfirm title="确定删除？" onConfirm = {() => onDelete(record.key)}>
                    <a href="#">删除</a>
                </Popconfirm> 
            )
        }
        ];
        return (
            <Table dataSource={products} columns={columns}/>
        )
    }
}
export default Salemgr
