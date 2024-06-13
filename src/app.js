import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server execuntando em http://localhost:${PORT}`)
})