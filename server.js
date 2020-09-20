const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Pool } = require('pg')
const port = require('./port')

const { CoreModel } = require('./database.js')
const coreModel = new CoreModel()

// Engine congiguration

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// BodyParser configuration
app.use(bodyParser.urlencoded({ extended: true }))

// Static files
app.use('/static', express.static('assets'))

// Controllers & Routers
const homeController = require('./controllers/home.js')
const blogController = require('./controllers/blog.js')
const blogpostController = require('./controllers/blogpost.js')
const courseController = require('./controllers/course.js')
const coursesController = require('./controllers/courses.js')
const galleryControllerteam = require('./controllers/gallery.js')
const teamController = require('./controllers/team.js')
const adminController = require('./controllers/admin.js')

// Routes
app.get( '/', homeController.get)
app.post( '/', homeController.post)

app.get( '/blogpost', blogpostController.get)
app.post( '/blogpost', blogpostController.post)

app.get( '/course/:courseId',  courseController.get)
app.post( '/course', courseController.post)

app.get( '/courses', coursesController.get)
app.post( '/courses', coursesController.post)

app.get( '/gallery', galleryControllerteam.get)
app.post( '/gallery', galleryControllerteam.post)

app.get( '/team', teamController.get)
app.post( '/team', teamController.post)

app.get( '/blog', blogController.get)
app.post( '/blog', blogController.post)


// app.get( '/admin', async (req, res) => {
	

// 	// client.release()	
// 	res.render('admin')
// })
app.post( '/admin', async (req, res) => {
	console.log(req.body);
	res.render('admin')
})

app.get( '/login', (req, res) => {
	
	res.render('login')
})

app.post( '/login', async (req,res) => {

	const users = [
		{
			name: 'Umar',
			password: '1'
		},
	]

	const name = req.body.name
	const password = req.body.password

	const admin = users.find( user => user.name === name && user.password === password)

	if (admin) {
		const { rows } = await coreModel.query(`
		SELECT
		students.id,
		students.full_name,
		students.phone_number,
		courses.name
		FROM students
		JOIN courses ON students.course_id = courses.id 
		ORDER BY id desc 
		LIMIT 50
		`)
		res.render('admin', { rows })

	}

	else {

		res.end('Error')
	}

})

// Listener
app.listen( port, () => {
	console.log( 'Server ready at at ' + port.port)
})
