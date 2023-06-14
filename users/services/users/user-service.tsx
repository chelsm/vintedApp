import {
    getAllUsers,
    getUserById,
    createUser,
    modifyUserById,
    removeUserById
} from '../../repositories/users-repository/UserRepository'
import UserModelService from './user-model-service'


export const searchUsers = async () => {
    try {
        const users = await getAllUsers();
        return users
    } catch (err) {
        throw err;
    }
}

export const searchUserById = async (id: number) => {
    try {
        const user = await getUserById(id);
        return user
    } catch (err) {
        throw err;
    }
}

export const createNewUser = async (user: UserModelService ) => {
    try {
        const newUser = await createUser(user);
        return newUser;
    } catch (err) {
        throw err;
    }
}

export const modifyUser = async (id:number, user: UserModelService ) => {
    try {
        const newUser = await modifyUserById(id, user);
        return newUser;
    } catch (err) {
        throw err;
    }
}

export const deleteUser = async (id:number) => {
    try {
        const user = await removeUserById(id);
        return user;
    } catch (err) {
        throw err;
    }
}
