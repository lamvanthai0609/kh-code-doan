import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: {type: String, required: true },
        description: { type: String, required: true },
        slug: { type: String, },
        image: { type: String },
        status: { type: Boolean, default: true },
    },
    { timestamps: true },
);
Category.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });


export default mongoose.model('Category', Category);