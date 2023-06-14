import { get } from 'http';
import getAllProducts from '../../repositories/products-repository/ProductRepository'
import ProductModelService from './product-model-service'

const searchProducts = async () => {
    try {
        const products = await getAllProducts();

        console.log('iciiiii',products)
        return products
    } catch (err) {
        throw err;
    }
}

export default searchProducts;