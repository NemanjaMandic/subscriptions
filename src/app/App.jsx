import React from 'react'

import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import AppStore from './AppStore';

class App extends React.Component {
    render() {
        return (
            <>
                <AppStore>
                    <Header />
                    <Main />  
                </AppStore>
                    
            </>
        )
    }
}

export default App
