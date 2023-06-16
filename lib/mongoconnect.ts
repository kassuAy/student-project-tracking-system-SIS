import { connect } from "http2";
import mongoose from "mongoose";
const  connectMongo=async ()=> mongoose.connect(process.env.MONGO_URI!);
export default connectMongo;

