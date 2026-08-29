import jwt from 'jsonwebtoken'

const secret="HelloToken"

function setUser(user){
    const Use=user.toObject()
    return jwt.sign(Use,secret)
}

function getUser(token){
    return jwt.verify(token,secret)
}

export {setUser,getUser}