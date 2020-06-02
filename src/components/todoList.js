import React from 'react'
import "antd/dist/antd.css";
import { Button, Input, List } from 'antd';
import { SliderContainer } from '../views/index/style';
const TodoList = (props) => {
    return (
        <SliderContainer>
            <div className='app-container'>
                <div className='header-content'>
                    <Input placeolder="请输入内容" value={props.inputValue} onChange={props.inputChangeValue} className='ant-form-input'/>
                    <Button type="primary" onClick={props.addItem}>新增</Button>
                </div>
                <div className="list-content">
                    <List 
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item className="list-item">
                         <div className='flex-item'>
                            {item}
                         </div>
                         <div className='flex-item'>
                            <Button type="primary" danger onClick={() => {props.delItem(index)} }>删除</Button>
                         </div>
                        </List.Item>
                      )}
                    />
                </div>
            </div>
        </SliderContainer> 
    )
}

export default TodoList