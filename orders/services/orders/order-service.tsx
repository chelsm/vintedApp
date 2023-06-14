import {
    getAllOrders,
    getOrderById,
    createOrder,
    modifyOrderById,
    removeOrderById
} from '../../repositories/orders-repository/OrderRepository'
import UserModelService from './order-model-service'


export const searchOrders = async () => {
    try {
        const users = await getAllOrders();
        return users
    } catch (err) {
        throw err;
    }
}

export const searchOrderById = async (id: number) => {
    try {
        const user = await getOrderById(id);
        return user
    } catch (err) {
        throw err;
    }
}

export const createNewOrder = async (user: UserModelService ) => {
    try {
        const newUser = await createOrder(user);
        return newUser;
    } catch (err) {
        throw err;
    }
}

export const modifyOrder = async (id:number, user: UserModelService ) => {
    try {
        const newUser = await modifyOrderById(id, user);
        return newUser;
    } catch (err) {
        throw err;
    }
}

export const deleteOrder = async (id:number) => {
    try {
        const user = await removeOrderById(id);
        return user;
    } catch (err) {
        throw err;
    }
}
