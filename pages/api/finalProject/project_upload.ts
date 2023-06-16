// import { NextApiRequest, NextApiResponse } from "next";
// import { hash } from "bcryptjs"
// import { connectToMongoDB } from "../../../lib/mongodb"
// import User from "../../../models/user"
// import { FinalProject } from "../../../types";
// import mongoose from "mongoose"
// import { error } from "console";
//   type unionType=String | Number
//   const handler=async (req:NextApiRequest, res:NextApiResponse)=>{
//     connectToMongoDB().catch(err=>res.json(err))

//     if(req.method === 'POST'){
//       if(!req.body)
//       return res.status(400).json({error: "Data is missing"})

//       const {project_title, description, accademicYear,fileName}=req.body
//     }
//   }





// try with video


// import connectMongo from "../../../lib/mongoconnect";
// import Project from "../../../models/projects";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function uploadTest(req:NextApiRequest, res:NextApiResponse) {
//   const {project_title, description}=req.body;
//   console.log('connecting to mongo');
//   await connectMongo()
//   console.log('connected to mongo');
//   console.log('creating a document');
//   const project = await Project.createCollection(req.body);
//   console.log('created document');

//   res.json({project});

// }




import {v4 as uuid} from 'uuid';
import multer from 'multer';
import Final_project from '../../../models/projects';
import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'stream/consumers';
const storage = multer.memoryStorage();
import { connectToMongoDB } from '../../../lib/mongodb';
const upload =multer({storage});

export default async function handler(req:NextApiRequest,res:NextApiResponse){
  connectToMongoDB().catch(err=> res.json(res))
  if(req.method === 'POST'){
    if(!req.body) return res.status(400).json({error:'data is missing'})
    const projectData={
      projectTitle:req.body.projectTitle,
      description:req.body.description,
      academic_year:req.body.academic_year,
      demoImage:{
        data:req.body.demoImage ?req.body.demoImage.data:null,
        contentType:req.body.demoImage ? req.body.demoImage.type : null,
      },
      projectFile:{
        data:req.body.projectFile ? req.body.projectFile.data :null,
        contentType:req.body.projectFile ? req.body.projectFile.type :null,
      },
    };
    if (projectData.demoImage) {
      projectData.demoImage.data = Buffer.from(projectData.demoImage.data)
    }
    if (projectData.projectFile){
      projectData.projectFile.data =Buffer.from(projectData.projectFile.data);
    }
    const titleExists=await Final_project.findOne({projectData});

    if(projectData.projectTitle.length === 0 && projectData.academic_year.length ===0 && projectData.description.length ===0)
      return res.status(409).json({error:'all fields are required'});
       Final_project.create({
        projectData
        


       })


    

    // const project =new Final_project(projectData);

    // try {
    //   await project.save();
    //   res.status(201).json({message:'project created successfully'});
    // }
    // catch (error){
    //   console.error(error);
    //   res.status(500).json({message:'Error creating project'});
    // }
  }
}



