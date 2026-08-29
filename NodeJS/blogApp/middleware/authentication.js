import { valdiateToken } from "../services/authentication.js";

function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName]
        if(!tokenCookieValue){
            next();
        }
        try {
            const userPayload=valdiateToken(tokenCookieValue)
            req.user=userPayload
            next()
        } catch (error) {
            next()
        }

    }
}

export default checkForAuthenticationCookie