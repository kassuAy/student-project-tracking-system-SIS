import { Schema, model, models } from "mongoose"
import BSON from "bson"
import { Binary } from "mongodb"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [4, "Full name should be atleast 4 characters long"],
        maxLength: [30, "Full name should be less than 30 characters"]
    },
    username:{
        type:String,
        required:[true]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false
    },
    role:{
        type: String,
        // required:true
    }
})
const User = models.User || model("User", UserSchema)

export default User

