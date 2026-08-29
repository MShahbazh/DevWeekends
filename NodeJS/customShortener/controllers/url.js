import {nanoid} from 'nanoid'
import URL from '../models/url.js'

async function handleGenerated(req,res){
    const id=nanoid(8)
    await URL.create(
        {
            shortId: id,
            redirectUrl:body.url,
            visitHistory:[]
        }
    )
    return res.json({id:id})
}

async function handleCount(req,res){
    const id=req.params.id
    const result=await URL.findOne({shortId})
    return res.json({clicks:result.visitHistory.length,visit:result.visitHistory})
    
}

export {handleGenerated,handleCount}