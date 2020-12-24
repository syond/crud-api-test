import { Request, Response } from 'express'

import Pj from '../models/Pj'
import Pf from '../models/Pf'
import EnderecoPf from '../models/EnderecoPf'
import EnderecoPj from '../models/EnderecoPj'
import DadosPj from '../models/DadosPj'
import DadosPf from '../models/DadosPf'

interface IDados {
  // eslint-disable-next-line camelcase
  pj_id?: string;
  // eslint-disable-next-line camelcase
  pf_id?: string;
  email: string;
  telefone: number;
  celular: number;
  foto: string;
}

interface IAddress {
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: number;
}

export default new (class UserController {
  async create (request: Request, response: Response) {
    const { tipo } = request.body

    if (tipo === 'pj') {
      const { razaoSocial, cnpj } = request.body

      const userPj = { razaoSocial, cnpj }

      try {
        const insertedUser = await Pj.create([userPj])

        // eslint-disable-next-line camelcase
        const pj_id: string = insertedUser[0].id

        const { email, telefone, celular, foto } = request.body

        const dadosPj: IDados = { pj_id, email, telefone, celular, foto }

        await DadosPj.create([dadosPj])

        const { endereco } = request.body

        const userAddresses = endereco.map((endereco: IAddress) => {
          return {
            endereco: endereco.endereco,
            numero: endereco.numero,
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            pj_id: pj_id
          }
        })

        await EnderecoPj.create(userAddresses)

        response.status(201).json({ succes: true, message: 'User registred!' })
      } catch (error) {
        console.log(error)

        response.status(400).json({ succes: false, message: 'Something went wrong.' })
      }
    } else {
      const { nome, cpf, sexo, dataNasc } = request.body

      const userPf = { nome, cpf, sexo, dataNasc }

      try {
        const insertedUser = await Pf.create([userPf])

        // eslint-disable-next-line camelcase
        const pf_id: string = insertedUser[0].id

        const { email, telefone, celular, foto } = request.body

        const dadosPf: IDados = { pf_id, email, telefone, celular, foto }

        await DadosPf.create([dadosPf])

        const { endereco } = request.body

        const userAddresses = endereco.map((endereco: IAddress) => {
          return {
            endereco: endereco.endereco,
            numero: endereco.numero,
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            pf_id: pf_id
          }
        })

        await EnderecoPf.create(userAddresses)

        response.status(201).json({ succes: true, message: 'User registred!' })
      } catch (error) {
        console.log(error)

        response.status(400).json({ succes: false, message: 'Something went wrong.' })
      }
    }
  }
})()
