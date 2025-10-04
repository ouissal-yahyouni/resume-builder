import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name:{ type : String, required: true},
    email : { type : String, required: true, unique: true},
    password : { type : String, required: true},
    role : { type : String, default: "user"},
},{
    timestamps: true
})

export default mongoose.model("User", userShema);