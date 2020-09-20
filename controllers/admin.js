const { CoreModel, pool } = require('../database.js')
const coreModel = new CoreModel()




const admin = [
	{
		name: 'Umar',
		password: 'root0215'
	},
]

module.exports = {

	get: async(req,res) => {
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
		res.render('admin', { rows })
	},

	post: async(req,res) => {

		const login = req.body.name
		const password = req.body.password

		const find = admin.find(element => element.name == login && element.password == password)

		if (find) {

			res.redirect('login')
		}

		else {

			res.end('error')
		}
	}
}