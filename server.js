const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Pool } = require('pg')
const port = require('./port')

// Engine congiguration

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// BodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }))

// Static files
app.use('/static', express.static('assets'))

// Pool
app.use(async function (req, res, next) {
	
	const pool = new Pool ({

		host: 'localhost',
		database: 'najottalim',
		port: 5432,
		user: 'postgres',
		password: 'baxtiyor'

	})

	req.pgPool = pool

	next()
})

// Controller & Routers
const homeController = require('./controllers/home.js')
const blogController = require('./controllers/blog.js')
const blogpostController = require('./controllers/blogpost.js')
const courseController = require('./controllers/course.js')
const coursesController = require('./controllers/courses.js')
const galleryControllerteam = require('./controllers/gallery.js')
const teamController = require('./controllers/team.js')

// Routes
app.get( '/', homeController.get)
app.post( '/', homeController.post)
app.get( '/blogpost', blogpostController.get)
app.post( '/blogpost', blogpostController.post)
app.get( '/course',  courseController.get)
app.post( '/course', courseController.post)
app.get( '/courses', coursesController.get)
app.post( '/courses', coursesController.post)
app.get( '/gallery', galleryControllerteam.get)
app.post( '/gallery', galleryControllerteam.post)
app.get( '/team', teamController.get)
app.post( '/team', teamController.post)
app.get( '/blog', blogController.get)
app.post( '/blog', blogController.post)

// Listener
app.listen( port, () => {

	console.log( 'Server ready at at ' + port.port)
})