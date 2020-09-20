const { CoreModel} = require('../database.js')
const coreModel = new CoreModel()


module.exports = {

	get :  async (req,res) => {
		const { rows } = await coreModel.query
		(`
		SELECT
		students.id,
		students.full_name,
		students.phone_number,
		courses.name
		FROM students
		JOIN courses ON students.course_id = courses.id 
		`)
		res.render('blog', { courses: rows })
},
	post : async(req,res) => {

	const name = req.body.username
	const number = req.body.phone_number
	const course = req.body.course

	if( course == null ) {
		
		res.render('errorpost')
	}

	else if(!(isNaN(parseInt(name))) && (isNaN(number))) {

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
