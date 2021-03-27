import { User } from "../../entities/User";

import UserModel from '../schemas/UserSchema';

import { IUsersRepository } from "../IUsersRepository";


export class UserImplementation implements IUsersRepository {

    async getAll(): Promise<User[]> {

        return [];
    }

    async findByEmail(email: string): Promise<User> {
        return;
    }

    async save(user: User): Promise<void> {
        const usr = new UserModel({ email: user.email, username: user.username });
        await usr.save();
    }

    async delete(email: string): Promise<void> {
        UserModel.deleteOne()
    }

    async update(user: User): Promise<void> {

    }
}