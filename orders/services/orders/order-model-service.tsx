export default interface OrderModelService {
    id: number;
    user_sender: number;
    user_receiver: number;
    product_id: number;
    price: number;
}

export default interface OrderModelGetService {
    id: number;
    user_sender: number;
    user_receiver: number;
    product_id: number;
}