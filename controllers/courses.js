module.exports = {

	get :  async (req,res) => {
	res.render('courses')
},
	post : async(req,res) => {

	const name = req.body.name
	const number = req.body.phone_number
	const course = req.body.course

	if( course == null ) {
		
		res.render('errorpost')
	}

	else if(!(isNaN(parseInt(name))) & (isNaN(number)) ) {

		res.render('twoerrors')
	}

	else {
		
		res.render('post')

		const client = await req.pgPool.connect()

		const result = await client.query(`

		INSERT INTO posts (

			full_name,
			phone_number,
			course_type
		)
		VALUES ( $1, $2, $3)`, [ name, number, course])

			client.release()
		}
	}
}
