import mongoose, { Schema } from 'mongoose';
import { IAuthorModel } from './interfaces';


const AuthorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);