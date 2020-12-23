import connection from '../database/connection'
import enderecoPjSchema from '../schemas/enderecoPj.schema'

const EnderecoPj = connection.model('EnderecosPj', enderecoPjSchema)

export default EnderecoPj
