import jwt from "jsonwebtoken";

export default async function isAuthenticated (req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        if(!token) {
            return res.status(401).json({message: "User not authenticated."})
        };

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        if(!decode) {
            return res.status(401).json({message: "Invalid token"})
        };
        
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}