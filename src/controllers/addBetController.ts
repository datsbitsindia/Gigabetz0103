import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("add-bet")
export class AddBetController {
  @Post("")
  @Middleware(auth_role(ROLES["User"]))
  private async postBet(req: ISecureRequest, res: Response) {
    const {
      SportID,
      EventName,
      FIID,
      BetID,
      ODValue,
      ODCalcValue,
      BetAmount,
      ReturnAmount,
      ITID,
    } = req.body;
    const [error, result] = await asyncWrap(
      runSP("I_UsersBets", [
        {
          name: "SportID",
          value: SportID,
        },
        {
          name: "EventName",
          value: EventName,
        },
        {
          name: "MarketGroup",
          value: EventName,
        },
        {
          name: "FIID",
          value: FIID,
        },
        {
          name: "BetID",
          value: BetID,
        },
        {
          name: "ITID",
          value: ITID,
        },
        {
          name: "ODValue",
          value: ODValue,
        },
        {
          name: "ODCalcValue",
          value: ODCalcValue,
        },
        {
          name: "BetAmount",
          value: BetAmount,
        },
        {
          name: "ReturnAmount",
          value: ReturnAmount,
        },
        {
          name: "LoginUserID",
          value: req.payload.userId,
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
