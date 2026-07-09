import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    uuid: string;
    email: string;
    username: string;
 }

const UserSchema: Schema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }
});

export default mongoose.model<IUser>('users', UserSchema);
