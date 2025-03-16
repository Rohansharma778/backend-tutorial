import mongoose,{Schema} from "mongoose";
import mongooseAggreagatePaginate from "mongooseAggreagatePaginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String, // aws cloudinary  url
            required:true
        },
        thumbnail:{
            type:String, //cloudinary  url
            required:true
        },
        title:{
            type:String, //cloudinary  url
            required:true
        },
        description:{
            type:String, //cloudinary  url
            required:true
        },
        duration:{
            type:Number, //cloudinary  url
            required:true
        },
        views:{
            type:Number, //cloudinary  url
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId, //cloudinary  url
            ref:"User"
        },
    },
    {
        timestamp:true
    }
)

videoSchema.plugin(mongooseAggreagatePaginate)


export const Video = mongoose.model("Video", videoSchema)