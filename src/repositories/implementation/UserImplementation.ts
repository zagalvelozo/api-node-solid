import { User } from "../../entities/User";
import UserModel from '../schemas/UserSchema';
import { IUsersRepository } from "../IUsersRepository";


export class UserImplementation implements IUsersRepository {

    async getAll(): Promise<User[]> {
        return await UserModel.find() as User[];
    }

    async findByEmail(email: string): Promise<User> {
        return await UserModel.findOne({email: email}) as User;
    }

    async save(user: User): Promise<void> {
        const usr = new UserModel({ uuid: user.id, email: user.email, username: user.username });
        await usr.save();
    }

    async delete(email: string): Promise<void> {
        await UserModel.deleteOne({email: email});
    }

    async update(user: User): Promise<void> {
        await UserModel.updateOne({email: user.email}, { username: user.username});
    }
}