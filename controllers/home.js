const { CoreModel } = require('../database.js')
const coreModel = new CoreModel()


module.exports = {
	get :  async (req,res) => {
		const { rows } = await coreModel.query('select * from courses')
		const { rows: team } = await coreModel.query('select * from team')
		const body = req.body
		res.render('index', { body: body, courses: rows, team})
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