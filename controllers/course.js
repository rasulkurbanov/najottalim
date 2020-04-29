module.exports = {

	get :  async (req,res) => {
	res.render('course')
},
	post : async(req,res) => {


	const name = req.body.name
	const number = req.body.phone_number
	const course = req.body.course

	const client = await req.pgPool.connect()

	const result = await client.query(`

		INSERT INTO posts (

			full_name,
			phone_number,
			course_type
		)
		VALUES ( $1, $2, $3)`, [ name, number, course])

	res.render('post')

	client.release()
	}
}