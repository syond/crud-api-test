import { Schema } from 'mongoose'
import Pf from '../models/Pf'

const enderecoPfSchema = new Schema({
  endereco: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: { type: String },
  bairro: { type: String },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  cep: { type: String, required: true },
  pf_id: {
    type: Schema.Types.ObjectId,
    ref: Pf,
    required: true
  }
}, { timestamps: true })

export default enderecoPfSchema
