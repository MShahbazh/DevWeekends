import express from 'express'
import { handleGenerated, handleCount } from '../controllers/url.js'

const router=express.Router()
router.post('/',handleGenerated)
router.get('/analytics/:id',handleCount)

export default router
