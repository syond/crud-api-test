// import { Joi } from 'celebrate'

import { Schema } from 'mongoose'

const pfSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  sexo: {
    type: String,
    required: true
  },
  dataNasc: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default pfSchema

// export = {
//   tipo: Joi.string().required(),
//   nome: Joi.string().required(),
//   razaoSocial: Joi.string().required(),
//   cpf: Joi.number().min(11).max(11).required(), // quando PF
//   cnpj: Joi.number().min(17).max(17).required(), // quando PJ
//   sexo: Joi.string().required(), // quando PF
//   dataNasc: Joi.date().max('now').required(), // quando PF
//   email: Joi.string().email().required(),
//   telefone: Joi.number().min(10).max(10).required(),
//   celular: Joi.number().min(10).max(11).required(),
//   foto: Joi.string().required(), // apenas URL
//   endereco: [{
//     rua: Joi.string().required(),
//     numero: Joi.number().required(),
//     complemento: Joi.string().required(),
//     bairro: Joi.string().required(),
//     cidade: Joi.string().required(),
//     estado: Joi.string().required(),
//     cep: Joi.number().required()
//   }]
// }
