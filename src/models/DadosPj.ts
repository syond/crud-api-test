import connection from '../database/connection'
import dadosPjSchema from '../schemas/dadosPj.schema'

const DadosPj = connection.model('DadosPj', dadosPjSchema)

export default DadosPj
