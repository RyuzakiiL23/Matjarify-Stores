// userUtils.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

class UserUtils {
    static async hashPassword(password) {
        return bcrypt.hash(password, saltRounds);
    }

    static async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    }

    static generateToken(user) {
        return jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    }

    static verifyToken(token) {
        return jwt.verify(token, process.env.SECRET_KEY);
    }

    static decodeToken(token) {
        return jwt.decode(token);
    }

    static isTokenExpired(token) {
        const decoded = this.decodeToken(token);
        return decoded.exp < Date.now() / 1000;
    }

    static getUserFromToken(token) {
        const decoded = this.decodeToken(token);
        return decoded.id;
    }
}

module.exports = UserUtils;
