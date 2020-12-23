import { Schema } from 'mongoose'
import Pj from '../models/Pj'

const enderecoPjSchema = new Schema({
  endereco: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: { type: String },
  bairro: { type: String },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  cep: { type: String, required: true },
  pj_id: {
    type: Schema.Types.ObjectId,
    ref: Pj,
    required: true
  }
}, { timestamps: true })

export default enderecoPjSchema
