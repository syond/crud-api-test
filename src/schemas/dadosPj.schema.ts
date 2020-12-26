import { Schema } from 'mongoose'
import Pj from '../models/Pj'

const dadosPjSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  telefone: {
    type: String
  },
  celular: {
    type: String
  },
  foto: {
    type: String
  },
  pj_id: {
    type: Schema.Types.ObjectId,
    ref: Pj,
    required: true
  }
})

export default dadosPjSchema
