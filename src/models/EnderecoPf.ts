import connection from '../database/connection'
import enderecoPfSchema from '../schemas/enderecoPf.schema'

const EnderecoPf = connection.model('Endereco', enderecoPfSchema)

export default EnderecoPf
