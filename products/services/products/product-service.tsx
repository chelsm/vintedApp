import {
    getAllProducts,
    getProductById,
    createProduct,
    modifyProductById,
    removeProductById
} from '../../repositories/products-repository/ProductRepository';
import ProductModelService from './product-model-service'


export const searchProducts = async () => {
    try {
        return await getAllProducts();
    } catch (err) {
        throw err;
    }
}

export const searchProductById = async (id: number) => {
    try {
        return await getProductById(id);
    } catch (err) {
        throw err;
    }
}

export const createNewProduct = async (product: ProductModelService ) => {
    try {
        return await createProduct(product);
    } catch (err) {
        throw err;
    }
}

export const modifyProduct = async (id:number, product: ProductModelService ) => {
    try {
        return await modifyProductById(id, product);
    } catch (err) {
        throw err;
    }
}

export const deleteProduct = async (id:number) => {
    try {
       return await removeProductById(id);
    } catch (err) {
        throw err;
    }
}
