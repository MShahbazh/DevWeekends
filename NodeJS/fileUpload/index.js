import express from 'express'
import path from 'path'
import multer from 'multer'

const app=express()
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        return cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload=multer({storage:storage})


app.get("/",(req,res)=>{
    return res.render("homepage")
})

app.post('/upload',upload.single('profileImage'),(req,res)=>{
  
    return res.redirect('/')
})

app.listen("8000",()=>{
    console.log("Started")
})