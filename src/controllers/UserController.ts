import { Request, Response } from 'express'
// import connection from '../database/connection'

import Pj from '../models/Pj'
import Pf from '../models/Pf'
// import EnderecoPf from '../models/EnderecoPf'
import EnderecoPj from '../models/EnderecoPj'
import DadosPj from '../models/DadosPj'

interface IDados {
  // eslint-disable-next-line camelcase
  pj_id?: string;
  pfId?: string;
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

    // const session = await connection.startSession()
    // session.startTransaction()

    if (tipo === 'pj') {
      const { razaoSocial, cnpj } = request.body

      const userPj = { razaoSocial, cnpj }

      try {
        // const insertedUser = await Pj.create([userPj], { session: session })

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
        // await EnderecoPj.create([userAddresses], { session: session })

        await EnderecoPj.create(userAddresses)

        // session.endSession()

        response.status(200).json({ succes: true, message: 'User registred!' })
      } catch (error) {
        console.log(error)
      }
    } else {
      const { nome, cpf, sexo, dataNasc } = request.body

      const userPf = { nome, cpf, sexo, dataNasc }

      try {
        await Pf.create([userPf])

        // session.endSession()
      } catch (error) {
        console.log(error)
      }
    }

    // const userEndereco = [{
    //   endereco,
    //   numero,
    //   complemento,
    //   bairro,
    //   cidade,
    //   estado,
    //   cep
    // }]

    // userEndereco.map(endereco => {

    // })

    // await Endereco.create([userEndereco], { session: session })
  }
})()
