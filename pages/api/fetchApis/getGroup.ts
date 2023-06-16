import { NextApiRequest, NextApiResponse } from 'next';
import { connectToMongoDB } from '../../../lib/mongodb';
import Group,{GroupDocument} from '../../../models/Group';
const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority';
const client = new MongoClient(connectToMongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

export default  async function handler (req:NextApiRequest,res:NextApiResponse) {

  if(req.method !=='GET')
  {
    res.status(405).json({message:"Method Not Allowed"});
    return;
  }

   try {
    const db =await connectToMongoDB()
    const fetchGroup:GroupDocument[]= await Group.find({batch:''})
    res.status(200).json({fetchGroup})
  }
  catch(error){
    return new Response("Failed to fatch prompts", {status:500})
  }
}
