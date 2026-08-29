import express from 'express'
import router from './Router/url.js';
import userRouter from './Router/user.js';
import connect from './connection.js';
import URL from './models/url.js';
import path from 'path'

const app=express();
const PORT=8000


connect("mongodb+srv://ADMINUSER_db_user:CustomPassword@cluster0.k1idylo.mongodb.net/")
// connect("mongodb+srv://ADMINUSER_db_user:<db_password>@cluster0.k1idylo.mongodb.net/")
.then(() => console.log("Database Connected"))
.catch((e)=>console.log(e))

app.set("view engine","ejs")
app.set("views",path.resolve("./Views"))
app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.use('/route',router)
app.use('/user',userRouter)
app.get('/login',(req,res)=>{
    return res.render("login")
})
app.get('/signup',(req,res)=>{
    return res.render("signup")
})
// app.get('/:shortId',async (req,res)=>{
//     const shortId=req.params.shortId
//     const enter=await URL.findOneAndUpdate({
//         shortId
//     },{$push:{
//         visitHistory:{
//             timestamp:Date.now()
//         }
//     }})
//     res.redirect(enter.redirectUrl)
// })


app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`);
})