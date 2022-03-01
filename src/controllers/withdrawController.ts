import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("withdraw")
export class WithdrawController {
  @Post("")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async postWithdraw(req: ISecureRequest, res: Response) {
    const { amount, userid, password, remark, withdrawType } = req.body;
    const [error, result] = await asyncWrap(
      runSP("I_UserWithdrawRequestBySuperuser", [
        {
          name: "WithdrawID",
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
        {
          name: "WithdrawType",
          value: withdrawType,
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
