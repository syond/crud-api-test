import connection from '../database/connection'
import enderecoPfSchema from '../schemas/enderecoPf.schema'

const EnderecoPf = connection.model('EnderecosPf', enderecoPfSchema)

export default EnderecoPf
