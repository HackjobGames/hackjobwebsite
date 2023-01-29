
import { Context, Request } from "koa"


declare global {
  export type KoaContext = Context & {
    req: {
      logout: any
    }
  }
}