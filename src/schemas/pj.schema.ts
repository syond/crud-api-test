import { Schema } from 'mongoose'

const pjSchema = new Schema({
  razaoSocial: {
    type: String,
    required: true,
    unique: true
  },
  cnpj: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

export default pjSchema
