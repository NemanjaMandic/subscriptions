import { api } from '../shared/api'
import Product from '../model/Product'

class ProductsService {
    async fetchProducts() {
        const productsArr = await api.get('/v1/products');

        const products = productsArr.map(product => {
            return new Product(product);
        })

        return products
    }
}

export const productsService = new ProductsService()
