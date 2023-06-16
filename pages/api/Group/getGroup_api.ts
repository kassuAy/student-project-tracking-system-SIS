// import { group } from "console";
import { connectToMongoDB } from "../../../lib/mongodb";
import Group from "../../../models/Group";
import { NextApiRequest,NextApiResponse } from "next";
const handler = async (req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method !== 'GET'){
        return res.status(405).json({message:'method is not allowed'})
    }
    try{
        await connectToMongoDB()
        const groups=Group.find({},'group_name')
        res.status(200).json({groups})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:'internal server error'})
    }
}

export default handler