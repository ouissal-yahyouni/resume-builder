import mongoose from "mongoose";

const resumeSchema= new mongoose.Schema ({
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User" , required : true},
    title : {type : String , required : true },
    sections : [
        {
            type : {type : String, required : true },
            content : { type : String , required : true}
        }
    ],
    template: { type: String, default: "default" },
}, { timestamps: true });

export default mongoose.model("Resume", resumeSchema); 