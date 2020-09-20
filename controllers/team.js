const { CoreModel } = require('../database.js')
const coreModel = new CoreModel()

module.exports = {

	get :  async (req,res) => {
		const { rows: team } = await coreModel.query('SELECT * FROM team')
		const { rows } = await coreModel.query('SELECT * FROM students')
		res.render('team', { team, courses: rows})
},
	post : async(req,res) => {
	const name = req.body.username
	const number = req.body.phone_number
	const course = req.body.course

	if( course == null ) {
		
		res.render('errorpost')
	}

	else if(!(isNaN(parseInt(name))) && (isNaN(number)) ) {

		res.render('twoerrors')
	}

	else {
		res.render('post')
		// const client = await req.pgPool.connect()
		const result = await coreModel.query(`
		INSERT INTO students (
			full_name,
			phone_number,
			course_id
		)
		VALUES ( $1, $2, $3)`, [ name, number, course ])
		}
	}
}