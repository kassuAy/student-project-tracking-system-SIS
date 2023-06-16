import { NextApiRequest, NextApiResponse } from 'next';
import { connectToMongoDB } from '../../lib/mongodb';
import Group from '../../models/Group';
import { IGroup } from '../../types';
import mongoose from 'mongoose';

type unionType = String | Number;
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(res));

  if (req.method === 'POST') {
    if (!req.body) return res.status(400).json({ error: '* data is missing' });

    const { group_name, students, batch } = req.body;

    const groupExists = await Group.findOne({ group_name });

    if (groupExists) {
      return res
        .status(409)
        .json({ error: '* The group name you entered already exists' });
    } else {
      if (batch.length === 0)
        return res.status(409).json({ error: '* This field is required' });

      Group.create(
        {
          group_name,
          students,
          batch,
        },
        (error: unknown, data: IGroup) => {
          if (error && error instanceof mongoose.Error.ValidationError) {
            for (let field in error.errors) {
              const msg = error.errors[field].message;
              return res.status(409).json({ error: msg });
            }
          }

          const group = {
            group_name: data.group_name,
            students: data.students,
            batch: data.batch,
            _id: data._id,
          };
          alert('group successfully created');
          return res.status(201).json({
            success: true,
            group,
          });
        }
      );
    }
  } else {
    res.status(405).json({
      error: 'Method Not Allowed',
    });
  }
};
export default handler;
