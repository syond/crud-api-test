import connection from '../database/connection'
import pjSchema from '../schemas/pj.schema'

const Pj = connection.model('Pj', pjSchema)

export default Pj
