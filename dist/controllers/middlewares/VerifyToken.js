"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup_verify_token = exports.sign_token = exports.verify_token = void 0;
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const util_1 = __importDefault(require("util"));
const { TOKEN_SECRET, TOKEN_EXPIRY, SIGNUP_TOKEN_SECRET, SIGNUP_TOKEN_EXPIRY } = process.env;
function verify_token(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        res.status(http_status_codes_1.UNAUTHORIZED).send({
            code: 0,
            message: "You are not authorized to use this service",
        });
    }
    jsonwebtoken_1.default.verify(token, TOKEN_SECRET, (err, payload) => {
        if (err) {
            res.status(http_status_codes_1.UNAUTHORIZED).send({
                code: 0,
                message: "You are not authorized to use this service",
            });
        }
        req.userId = payload.userId;
        next();
    });
}
exports.verify_token = verify_token;
function sign_token(payload, { expiresIn = TOKEN_EXPIRY, secret = TOKEN_SECRET }) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, secret, {
            expiresIn,
        }, (err, token) => {
            if (err)
                reject(err);
            else {
                resolve(token);
            }
        });
    });
}
exports.sign_token = sign_token;
function signup_verify_token(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        console.log("TOKEN", util_1.default.inspect(token, { breakLength: Infinity }));
        return res.status(http_status_codes_1.UNAUTHORIZED).send({
            code: 0,
            message: "You are not authorized to use this service",
        });
    }
    jsonwebtoken_1.default.verify(token.toString(), SIGNUP_TOKEN_SECRET, (err, payload) => {
        if (err) {
            console.log(util_1.default.inspect(err, { breakLength: Infinity }));
            return res.status(http_status_codes_1.UNAUTHORIZED).send({
                code: 0,
                message: "You are not authorized to use this service",
            });
        }
        //req.userId = payload.userId;
        next();
    });
}
exports.signup_verify_token = signup_verify_token;
//# sourceMappingURL=VerifyToken.js.map