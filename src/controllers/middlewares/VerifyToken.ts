import { UNAUTHORIZED } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import util from "util";

const { TOKEN_SECRET, TOKEN_EXPIRY, SIGNUP_TOKEN_SECRET, SIGNUP_TOKEN_EXPIRY } =
  process.env;

export function verify_token(req: any, res: any, next: any) {
  const token = req.headers.token;
  if (!token) {
    res.status(UNAUTHORIZED).send({
      code: 0,
      message: "You are not authorized to use this service",
    });
  }

  jwt.verify(token, TOKEN_SECRET, (err: any, payload: any) => {
    if (err) {
      res.status(UNAUTHORIZED).send({
        code: 0,
        message: "You are not authorized to use this service",
      });
    }
    req.userId = payload.userId;
    next();
  });
}

type JWT_TOKEN_DETAILS = {
  expiresIn: string | number;
  secret: string;
};

export function sign_token(
  payload: any,
  { expiresIn = TOKEN_EXPIRY, secret = TOKEN_SECRET }: JWT_TOKEN_DETAILS
) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      {
        expiresIn,
      },
      (err, token) => {
        if (err) reject(err);
        else {
          resolve(token);
        }
      }
    );
  });
}

export function signup_verify_token(req: any, res: any, next: any) {
  const token = req.headers.token;
  if (!token) {
    console.log("TOKEN", util.inspect(token, { breakLength: Infinity }));
    return res.status(UNAUTHORIZED).send({
      code: 0,
      message: "You are not authorized to use this service",
    });
  }

  jwt.verify(
    token.toString(),
    SIGNUP_TOKEN_SECRET,
    (err: any, payload: any) => {
      if (err) {
        console.log(util.inspect(err, { breakLength: Infinity }));
        return res.status(UNAUTHORIZED).send({
          code: 0,
          message: "You are not authorized to use this service",
        });
      }
      //req.userId = payload.userId;
      next();
    }
  );
}
