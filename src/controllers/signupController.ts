import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { runSP } from "../Dal/db";
import { asyncWrap } from "../utils/asyncWrap";
import { hashPassword } from "../utils/passwordHash";

@Controller("signup")
export class SignupController {
  @Post("")
  private async signupNewUser(req: any, res: any) {
    const { fullName, email, mobileNumber, roleId, userName, password } =
      req.body;

    const [error, result] = await asyncWrap(
      runSP("IU_Users", [
        {
          name: "UserID",
          value: 0,
        },
        {
          name: "RoleID",
          value: roleId,
        },
        {
          name: "FullName",
          value: fullName,
        },
        {
          name: "Email",
          value: email,
        },
        {
          name: "PhoneNumber",
          value: mobileNumber,
        },
        {
          name: "UserName",
          value: userName,
        },
        {
          name: "Password",
          value: hashPassword(password),
        },
      ])
    );

    if (!result) {
      return res.status(INTERNAL_SERVER_ERROR).send({
        success: false,
        code: -1,
        message: "Something went wrong!",
      });
    }

    return res.status(OK).send({
      success: true,
      code: 1,
      message: result.recordset[0].message,
    });
  }
}
