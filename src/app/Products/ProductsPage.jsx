import React, { Component } from 'react';

import CardList from '../components/Card/CardList';
import { productsService } from '../../services/productsService';

class ProductsPage extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    async loadProducts() {
        try {
            const products = await productsService.fetchProducts();

            this.setState({ products });
        } catch (error) {
            alert('This is err');
        }
    }

    render() {
        return <CardList items={this.state.products} />;
    }
}

export default ProductsPage;
