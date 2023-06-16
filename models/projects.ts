
import { Schema, models, model} from "mongoose";

const projectSchema = new Schema({
  
  projectTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  academic_year: {
    type: String,
    required: true
  },
  demoImage: {
    data: Buffer,
    contentType: String
  },
  projectFile: {
    data: Buffer,
    contentType: String
  }
});
const Final_project =models.Final_project || model('Final_project',projectSchema)
export default Final_project