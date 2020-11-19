import { Request, Response } from 'express'

// interface IUser {
//   tipo: string;
//   nome: string;
//   razaoSocial?: string;
//   cpf?: number; // quando PF
//   cnpj?: number; // quando PJ
//   sexo?: string; // quando PF
//   dataNasc?: Date; // quando PF
//   email: string;
//   telefone: number;
//   celular: number;
//   foto: string; // apenas URL
//   endereco: {
//       rua: string;
//       numero: number;
//       complemento: string;
//       bairro: string;
//       cidade: string;
//       estado: string;
//       cep: number;
//   }
// }

export default new class UserController {
  create (request: Request, response: Response) {
    const user = request.body

    console.log(user)

    response.json({ success: true, data: user })
  }
}()
