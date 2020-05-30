import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Button, Input, List } from 'antd';
import { SliderContainer } from './style';
import store from '../../store/index'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addList = this.addList.bind(this)
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
                            renderItem={item => (<List.Item>{item}</List.Item>)}
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
            type: 'addValue',
            value: this.state.inputValue
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}
