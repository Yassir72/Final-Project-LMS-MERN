const jwt=require('jsonwebtoken');
const {body,validationResult}=require('express-validator');
require('dotenv').config();

const validation = [
    body('email').isEmail().withMessage("Invalid email").normalizeEmail(),
    body('password').trim().notEmpty().withMessage("Password cannot be empty"),
    async function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: "Validation failed" });
        }
        next();
    }
];

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, (process.env.SECRET_KEY) , (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized!" });
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'No authorization header provided' })
    }

};

module.exports = { validation, auth };
