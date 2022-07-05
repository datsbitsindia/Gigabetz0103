import { Controller, Get } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../../utils/asyncWrap";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import axios from "axios";
import { runSP } from "../../Dal/db";
require("dotenv").config();

const api_service_url = "https://api.b365api.com/v1/bet365/result";
const { token } = process.env;

@Controller("api/result")
export class ResultController {
  @Get("")
  private async getResult(req: ISecureRequest, res: Response) {
    const { match_id, sportId } = req.query;
    const reqUrl = `${api_service_url}?token=${token}&event_id=${match_id}`;
    const [error, result] = await asyncWrap(axios.get(reqUrl));

    if (!result) {
      console.log(error);
      return res.status(INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong!",
      });
    }

    const [jsonError, jsonResult] = await asyncWrap(
      runSP("I_JsonResult", [
        {
          name: "JasonResultID",
          value: 0,
        },
        {
          name: "SportID",
          value: +sportId,
        },
        {
          name: "JsonString",
          value: JSON.stringify(result.data),
        },
        {
          name: "FIID",
          value: +match_id,
        },
        {
          name: "ITID",
          value: 3,
        },
        {
          name: "LoginUserID",
          value: -1,
        },
      ])
    );

    if (!jsonResult) {
      return res.status(INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Error while Inserting result Data!",
      });
    }

    return res.status(OK).json({
      success: true,
      message: "Result data inserted Successfully",
    });
  }
}
