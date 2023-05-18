const express = require("express");
const app = express();
const randomNumberRoutes = require('./routes/randomnumber')

app.use(express.json())

app.use('/api', randomNumberRoutes )
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server is running')
})