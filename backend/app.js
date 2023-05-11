import express from 'express'
import cors from 'cors'
import calculate from './calculate.js'

const app = express()

// settings
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(cors())

// routes
app.post('/api/calcule', calculate)

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}`)
})
