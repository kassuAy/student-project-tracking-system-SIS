import BSON from 'bson';
import { Binary } from 'mongodb';
import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  project_title: {
    type: String,
    unique: true,
    required: [true, 'title is required'],
  },
  description: {
    type: String,
    required: [true, 'fill the description of the project'],
  },
  accademicYear: {
    type: Date,
    required: [true, "this field can't be empty"],
  },
  fileName: {
    type: Binary,
    chunkSizeBytes: 1048576, //10 mb
  },
});

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
