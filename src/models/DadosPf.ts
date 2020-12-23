import connection from '../database/connection'
import dadosPfSchema from '../schemas/dadosPf.schema'

const DadosPf = connection.model('DadosPf', dadosPfSchema)

export default DadosPf
