import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Slider } from './silder/silder'
export default class index extends Component {
    render() {
        return (
            <Layout>
                <Slider></Slider>
            </Layout>
        )
    }
}
