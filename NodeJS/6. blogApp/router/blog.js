import express from 'express'
import Blog from '../models/blog.js'

const blogRouter=express.Router()
blogRouter.get('/add-new',(req,res)=>{
    return res.render("addBlog",{
        user:res.user
    })
})

blogRouter.get('/:id',async (req,res)=>{
    const blog=await Blog.findById(req.params.id)
    const comments=await Comment.find({blogId:req.params.id})
    return res.render("blog",{
        user:req.user,
        blog
    }) 
})

blogRouter.post("/comment/:blogId", async (req,res)=>{
    const comment=await Comment.create({
         content:req.body.content,
         blogId:req.params.bodyId,
         createdBy:req.user._id
    })
    return res.redirect(`/blog/${req.params.blogId}`)
})

blogRouter.post("/",async (req,res)=>{
    const {title,body}=req.body
      const blog=await Blog.create({
            body,title,createdBy:req.user._id
      })
      return res.redirect(`/blog/${blog._id}`)
})

export default blogRouter