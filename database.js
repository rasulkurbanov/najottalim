const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	password: 998605774,
	port: 5432,
	database: 'najottalim'
})

class CoreModel {
	constructor() {
		this.pool = this.pool || pool
	}
	async query(SQL, ...params) {
		const client = await this.pool.connect()
		try {
			const result = await client.query(SQL, ...params)
			return result
		}
		finally {
			client.release()
		}
	}
}
module.exports = { CoreModel, pool }







