import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Button, Input, List } from 'antd';
import { SliderContainer } from './style';
import store from '../../store/index'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addList = this.addList.bind(this)
        // this.delItem = this.delItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <SliderContainer>
                <div className='app-container'>
                    <div className="header-content">
                        <Input 
                            placeholder={this.state.inputValue}
                            className="ant-form-input"
                            onChange={this.changeInputValue}
                            value={this.state.inputValue}
                        />
                        <Button type="primary" onClick={this.addList}>新增</Button>
                    </div>
                    <div className="list-content">
                        <List bordered
                            dataSource={this.state.list}
                            renderItem={(item, index) => (<List.Item clasname="list-item">
                            <div className='flex-item'>
                                {item}
                            </div>
                            <div className='flex-item'>
                                <Button type="primary" danger onClick={this.delItem.bind(this, index)}>删除</Button></div>
                            </List.Item>)}
                        />
                    </div>
                </div>
            </SliderContainer>
        )
    }

    changeInputValue (e) {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    addList () {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action)
    }
    delItem (index) {
        console.log(index)
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default Index