import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("change-status")
export class StatusContoller {
  @Post("")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async postChangeStatus(req: ISecureRequest, res: Response) {
    const { userid, password, betActive, userActive } = req.body;
    const [error, result] = await asyncWrap(
      runSP("U_UserActiveAandBetStatus", [
        {
          name: "UserID",
          value: +userid,
        },
        {
          name: "BetStatus",
          value: betActive,
        },
        {
          name: "LoginUserID",
          value: +req.payload.userId,
        },
        {
          name: "TransctionCode",
          value: password,
        },
        {
          name: "Active",
          value: userActive,
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
