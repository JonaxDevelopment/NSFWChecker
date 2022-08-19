const app = require('express.js')()

app.get('/', async (req,res)=>{
    res.send('hi')
})