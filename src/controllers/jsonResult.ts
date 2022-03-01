import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../utils/asyncWrap";
import { runSP } from "../Dal/db";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("json-result")
export class JsonResultController {
  @Post("")
  private async postBet(req: ISecureRequest, res: Response) {
    const { sportId, FIID, jsonString, ITID } = req.body;
    const [error, result] = await asyncWrap(
      runSP("I_JsonResult", [
        {
          name: "JasonResultID",
          value: 0,
        },
        {
          name: "SportID",
          value: sportId,
        },
        {
          name: "JsonString",
          value: jsonString,
        },
        {
          name: "FIID",
          value: FIID,
        },
        {
          name: "ITID",
          value: ITID,
        },
        {
          name: "LoginUserID",
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
