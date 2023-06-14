let db = require ('../../config')

export default interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
}

const userSchema = new db.Schema({
    id: Number,
    firstName: String,
    lastName: String
});
