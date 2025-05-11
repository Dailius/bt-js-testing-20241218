import jwt from 'jsonwebtoken';

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing in .env file");
}

export const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}
