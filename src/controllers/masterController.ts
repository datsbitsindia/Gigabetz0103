import { Controller, Middleware, Post, Get } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("change-game")
export class MasterController {
  @Get(":userid")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async getUserDetails(req: ISecureRequest, res: Response) {
    const { userid } = req.params;
    const [error, result] = await asyncWrap(
      runSP("G_UsersSportsAccess", [
        {
          name: "UserID",
          value: userid,
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

  @Post("")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async postChangeGames(req: ISecureRequest, res: Response) {
    const { amount, userid, password, remark } = req.body;
    const [error, result] = await asyncWrap(
      runSP("U_UserSportsAccess", [
        {
          name: "DepositID",
          value: 0,
        },
        {
          name: "Amount",
          value: +amount,
        },
        {
          name: "UserID",
          value: +userid,
        },
        {
          name: "Remarks",
          value: remark,
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
