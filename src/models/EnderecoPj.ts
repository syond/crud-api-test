import connection from '../database/connection'
import enderecoPjSchema from '../schemas/enderecoPj.schema'

const EnderecoPj = connection.model('Endereco', enderecoPjSchema)

export default EnderecoPj
