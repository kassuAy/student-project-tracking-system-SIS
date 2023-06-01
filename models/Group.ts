import { Schema,models,model } from 'mongoose'

const  groupSchema=new Schema({
groupName:{
    type:String,
    required:[true," group name is required"],
}
})
const Group = models.Group || model("Group", groupSchema)

export default Group