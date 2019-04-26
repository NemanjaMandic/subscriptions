import React, { Component } from 'react'
import AppContext from './context/AppContext';

export default class AppStore extends Component{
    state = {
        count: 0
    }

    onSelectProduct = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const storeValue = {
            ...this.state,
            onSelectProduct: this.onSelectProduct
        }
        return <AppContext.Provider value={storeValue}>{this.props.children}</AppContext.Provider>
    }
}
