import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;

const Actor = new Schema({
    name: { type: String, required: true },
    image: { type: String },
});


const Movie = new Schema(
    {
        name: {type: String, required: true },
        description: { type: String, required: true },
        slug: { type: String, required: true },
        image: { type: String },
        imageH: { type: String },
        trailer: { type: String },
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        totalVote: { type: Number, default: 0 },
        totalView: { type: Number, default: 0 },
        duration: { type: Number},
        durationStr: { type: String,},
        actors: [{ type: Actor }],
        status: { type: Boolean, default: true },
        isVip: { type: Boolean, default: false },
    },
    { timestamps: true },
);
Movie.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });


export default mongoose.model('Movie', Movie);