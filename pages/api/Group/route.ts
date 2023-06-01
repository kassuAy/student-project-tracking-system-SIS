import { NextApiRequest, NextApiResponse } from "next"
import { hash } from "bcryptjs"
import { connectToMongoDB } from "../../../lib/mongodb"
import mongoose from "mongoose"
import Group from "../../../models/Group"
import { number } from "yup"
import { IGroup } from "../../../types"
// unionType= String | Number
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" })

        const { groupName } = req.body

        const userExists = await Group.findOne({ groupName })

        if (userExists) {
            return res.status(409).json({ error: "this group Already exists" })
        }
        else {
            if (groupName.length == 0)
            return res.status(409).json({ error: "please enter your group namer" })
        Group.create({
            groupName,
            }, (error: unknown, data: IGroup) => {
                if (error && error instanceof mongoose.Error.ValidationError) {
                    //mongo db will return array
                    // but we only want to show one error at a time

                    for (let field in error.errors) {
                        const msg = error.errors[field].message
                        return res.status(409).json({ error: msg })
                    }
                }

                const student_group = {
                    name:data.name,
                    _id: data._id
                }

                return res.status(201).json({
                    success: true,
                    student_group
                })
            })
        }
    }
    else {
        res.status(405).json({ error: "Method Not Allowed" })
    }
}

export default handler