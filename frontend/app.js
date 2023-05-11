import express from 'express'

const app = express()
app.use(express.static('public'))
app.set('PORT', process.env.PORT || 8080)

// Start the server
app.listen(app.get('PORT'), () => console.log(`App started on http://localhost:${app.get('PORT')}`))
