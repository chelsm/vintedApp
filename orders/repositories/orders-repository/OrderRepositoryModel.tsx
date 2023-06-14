export default interface OrderModel {
    id: number;
    user_sender: number;
    user_receiver: number;
    product_id: number;
    price: number;
}

export default interface OrderModelGet {
    id: number;
    user_sender: number;
    user_receiver: number;
    product_id: number;
}

