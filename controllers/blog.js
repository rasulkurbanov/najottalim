module.exports = {

	get :  async (req,res) => {

	res.render('blog')
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

	else if(!(isNaN(parseInt(name)))) {

		res.render('errorname')
	}

	else if((isNaN(number))) {

		res.render('errorphone')
	}

	else {
		
		res.render('post')
	}
	
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
