import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;



const Episode = new Schema(
    {
        name: {type: String, required: true },
        link: { type: String, required: true },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        duration: { type: Number},
        durationStr: { type: String},
        coverImage: { type: String },
        animationImage: { type: String },
        slug: { type: String, required: true },
        alias: { type: String },
        typeVideo: { type: String },
        status: { type: Boolean, default: true },
    },
    { timestamps: true },
);
Episode.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });


export default mongoose.model('Episode', Episode);