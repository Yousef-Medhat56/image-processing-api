import * as express from "express"

const app = express()
const port = 7777

app.get("/",(req,res)=>{
    res.send("Hello Udacity")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})