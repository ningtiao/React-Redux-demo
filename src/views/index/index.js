import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Button, Input, List } from 'antd';
import { SliderContainer } from './style';
import store from '../../store/index'
import { changeInputAction, addItemAction, delItemAction } from '../../store/actionCreators'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.inputChangeValue = this.inputChangeValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <SliderContainer>
                <div className='app-container'>
                    <div className='header-content'>
                        <Input placeolder="请输入内容" value={this.state.inputValue} onChange={this.inputChangeValue} className='ant-form-input'/>
                        <Button type="primary" onClick={this.addItem}>新增</Button>
                    </div>
                    <div className="list-content">
                        <List 
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item className="list-item">
                             <div className='flex-item'>
                                {item}
                             </div>
                             <div className='flex-item'>
                                <Button type="primary" danger onClick={this.delItem.bind(this, index)}>删除</Button>
                             </div>
                            </List.Item>
                          )}
                        />
                    </div>
                </div>
            </SliderContainer>
        )
    }

    inputChangeValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    addItem () {
        const action = addItemAction()
        store.dispatch(action)
    }

    delItem (index) {
        const action = delItemAction(index)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default Index