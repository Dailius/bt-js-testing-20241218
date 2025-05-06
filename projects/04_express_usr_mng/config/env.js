import dotenv from 'dotenv';

dotenv.config();

const requireEnvConst = ['DB_USER', 'HOST', 'DB_PASSWORD'];

requireEnvConst.forEach((key)=>{
    if (!process.env[key]){
        throw new Error(`Env constant ${key} is missing`);
    }
});

export default process.env