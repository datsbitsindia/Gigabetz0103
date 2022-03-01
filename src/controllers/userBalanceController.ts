import { Controller, Get, Middleware } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("balance")
export class UserBalanceController {
  @Get(":userid")
  @Middleware(auth_role(ROLES.Users))
  private async getUserBalance(req: ISecureRequest, res: Response) {
    const { userid } = req.params;
    const [error, result] = await asyncWrap(
      runSP("G_GetUsersBalance", [
        {
          name: "UserID",
          value: +userid,
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
