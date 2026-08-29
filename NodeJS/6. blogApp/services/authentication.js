import jwt from 'jsonwebtoken'

const secret="why%this*?!-"

function createTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role
    }
    const token=jwt.sign(payload,secret)
    return token  
}

function valdiateToken(token){
    const payload=jwt.verify(token,secret)
    return payload
}

export {valdiateToken,createTokenForUser}