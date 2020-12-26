import { Schema } from 'mongoose'
import Pf from '../models/Pf'

const dadosPfSchema = new Schema({
  email: {
    type: String,
    unique: true
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
  pf_id: {
    type: Schema.Types.ObjectId,
    ref: Pf,
    required: true
  }
})

export default dadosPfSchema
