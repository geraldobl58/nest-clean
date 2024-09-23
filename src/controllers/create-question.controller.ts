import { Controller, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "src/auth/current-user-decorator";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";
import { UserPayload } from "src/auth/jwt-strategy";

@Controller("/questions")
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handler(@CurrentUser() user: UserPayload) {
    console.log(user);
    return `Ok`;
  }
}
