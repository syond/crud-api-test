import connection from '../database/connection'
import pfSchema from '../schemas/pf.schema'

const Pf = connection.model('Pf', pfSchema)

export default Pf
