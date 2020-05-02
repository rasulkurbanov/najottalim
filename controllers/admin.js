const { fromNow } = require('../helpers')

module.exports = {
	get: async(req,res) => {
	
	let client = await req.pgPool.connect()
	let result = await client.query(`

		SELECT * FROM posts 
	`)
		res.render('admin', {body: result.rows, fromNow: fromNow})
	} 
}