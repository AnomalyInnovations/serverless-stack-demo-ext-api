import { success } from "../../libs/response-lib";

export async function main(event, context) {
  // business logic code for liking a post

  return success({ status: true });
}
