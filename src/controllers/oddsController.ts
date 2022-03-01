import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("odds")
export class OddsController {
  @Post("")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async postOdds(req: ISecureRequest, res: Response) {
    const { minOdds, userid, password, maxOdds } = req.body;
    const [error, result] = await asyncWrap(
      runSP("IU_UserMinMaxOdds", [
        {
          name: "MinimumOdds",
          value: minOdds,
        },
        {
          name: "MaximumOdds",
          value: maxOdds,
        },
        {
          name: "UserID",
          value: +userid,
        },
        {
          name: "LoginUserID",
          value: +req.payload.userId,
        },
        {
          name: "TransctionCode",
          value: password,
        },
      ])
    );

    if (!result) {
      return res.status(INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong!",
      });
    }

    return res.status(OK).json({
      success: true,
      data: result.recordset,
    });
  }
}
