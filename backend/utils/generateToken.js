import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });


  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, //prevents client-side JavaScript from accessing the cookie
    sameSite:"strict",// CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", 
  });
};
export default generateTokenAndSetCookie;