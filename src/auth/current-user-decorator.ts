import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserPayload } from "./jwt-strategy";

export const CurrentUser = createParamDecorator(
  (_: never, content: ExecutionContext) => {
    const request = content.switchToHttp().getRequest();

    return request.user as UserPayload;
  }
);
