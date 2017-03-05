import React,{ Component } from "react"

const renderField = ({input,label,type}) => (
    <div>
        <input {...input} className="ant-form-item-control" placeholder={label} type={type}/>
    </div>
)
export default renderField