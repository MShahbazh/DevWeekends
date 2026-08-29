import express from 'express'
import data from './MOCK_DATA.json' with { type: 'json' };

const app = express()
const PORT = 8000



app.use('/',(req,res,next)=>{
    console.log("Hello from MiddleWare");
    next()
})

app.get('/api/users',(req,res)=>{
    res.send(data)
})

app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    const user=data.find((user)=> user.id==id)
    return res.json(user)
})

app.route('/api/users').get((req,res)=>{
 const html=`
    <ul>
        ${data.map((user)=>{
            return `<li>${user.first_name}</li>`
        }).join("")}
    </ul>
    `
    res.send(html)
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})