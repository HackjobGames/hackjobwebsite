import { Context } from "koa"

declare global {
  export type KoaContext = Context & {
    request: {
      logout: any,
      files: any
    },
    user: user,
  }
}