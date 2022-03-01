import { Controller, Get, Middleware } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("user-details")
export class UserDetailsController {
  @Get("")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async getUserDetails(req: ISecureRequest, res: Response) {
    const [error, result] = await asyncWrap(
      runSP("G_GetUserDetail", [
        {
          name: "LoginUserId",
          value: req.payload.userId,
        },
        {
          name: "PageNo",
          value: -1,
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
