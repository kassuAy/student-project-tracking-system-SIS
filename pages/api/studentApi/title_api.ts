import { NextApiRequest,NextApiResponse } from "next";
import { connectToMongoDB } from "../../../lib/mongodb";
import { IGroup, ITitle } from "../../../types";
import ProjectList from '../../../models/TitleModel'
import mongoose from "mongoose";
type unionType =String | Number;
const handler = async (req:NextApiRequest,res:NextApiResponse)=>{
    connectToMongoDB().catch(err=> res.json(res))

    if(req.method === 'POST'){
        if(!req.body) return res.status(400).json({error:"data is missing"})

        const {groupName,projects}=req.body

        const groupExists = await ProjectList.findOne({groupName})
        const titleExists=await ProjectList.findOne({projects})
        if(groupExists && titleExists){
            return res.status(409).json({error: "the group name you entered already exists"})
        }
        else{
            if(groupName.length === 0)
             return res.status(409).json({error: "this field is required"})
        
            ProjectList.create({
            groupName,
            projects
            
         }, (error:unknown,  data:ITitle)=>{
            if (error && error instanceof mongoose.Error.ValidationError){

                for (let field in error.errors){
                    const msg=error.errors[field].message
                    return res.status(409).json({error:msg})
                }
            }

            const project_title = {
                groupName:data.groupName,
                projects:data.projects,
                _id:data._id
                
            }

            return res.status(201).json({
                success: true,
                project_title
            })

        })  
   
}

}

else {
    res.status(405).json({
        error: 'Method Not Allowed'})
    }
}
export default handler