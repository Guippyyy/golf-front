import jwt_decode from './jwt_decode'; 

const token =  localStorage.get("token")

const decoded = jwt_decode(token)

console.log(decoded)