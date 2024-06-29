const PORT = 4000;
const DB_URL = "mongodb+srv://mihajlopopovicc986:mtSnYAj8dBgMaeM8@cluster0.tho2rv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const SALT = 10;
const JWT_SECRET = "socialapp";
const JWT_OPTIONS = {
    algorithm:"HS256",
    expiresIn: "1d"
}

module.exports = {
    PORT,
    DB_URL,
    SALT,
    JWT_SECRET,
    JWT_OPTIONS
}