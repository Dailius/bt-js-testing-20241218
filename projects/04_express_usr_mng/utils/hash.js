import bcryptjs from 'bcryptjs';

const hashPassword = (psw) => bcryptjs.hash(psw, 10);
const comparePassword = (plain, hashed) => bcryptjs.compare(plain, hashed);

export { hashPassword, comparePassword };