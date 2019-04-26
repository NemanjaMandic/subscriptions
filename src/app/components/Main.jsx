import React from 'react'
import { Route } from 'react-router-dom'


import ProductsPage from '../Products/ProductsPage';
import TemplatesPage from '../Templates/TemplatesPage';

const Main = () => {
    return (
        <main className="container">
            <Route path="/products" component={ProductsPage} />
            <Route exact path="/" component={TemplatesPage} />
        </main>
    )
}

export default Main
