import jwt from "jsonwebtoken";
export const generateToken=(userId,res)=>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn:"7d"
  })

  res.cookie("jwt",token,{
    maxAge: 7*24*60*1000,
    httpOnly:true, //prevent xss attacks 
    sameSite:"strict", //csrf attacks cross site req forget attacks
    secure:process.env.NODE_ENV != "development"

  })

  return token;
}