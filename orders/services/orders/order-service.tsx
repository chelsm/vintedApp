import {
  getAllOrders,
  getOrderById,
  createOrder,
  modifyOrderById,
  removeOrderById,
} from "../../repositories/orders-repository/OrderRepository";
import OrderModelGetService from "./order-model-service";

export const searchOrders = async () => {
  try {
    return await getAllOrders();
  } catch (err) {
    throw err;
  }
};

export const searchOrderById = async (id: number) => {
  try {
    return await getOrderById(id);
  } catch (err) {
    throw err;
  }
};

export const createNewOrder = async (order: OrderModelGetService) => {
  try {
    const resultat = await createOrder(order);
    console.log(resultat);
    return resultat;
  } catch (err) {
    throw err;
  }
};

export const modifyOrder = async (id: number, order: OrderModelGetService) => {
  try {
    return await modifyOrderById(id, order);
  } catch (err) {
    throw err;
  }
};

export const deleteOrder = async (id: number) => {
  try {
    return await removeOrderById(id);
  } catch (err) {
    throw err;
  }
};
