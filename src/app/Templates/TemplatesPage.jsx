import React, { Component } from 'react';

import CardList from '../components/Card/CardList';
import { templatesService } from '../../services/templatesService';

class TemplatesPage extends Component {
    state = {
        templates: []
    }

    componentDidMount() {
        this.loadProducts()
    }

    async loadProducts() {
        try {
            const templates = await templatesService.fetchTemplates()

            this.setState({ templates })
        } catch (error) {
            alert('This is err');
        }
    }

    render() {
        return <CardList items={this.state.templates} />
          
    }
}

export default TemplatesPage;
