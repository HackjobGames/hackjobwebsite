import { users } from '@prisma/client'


declare global {
  interface signInBody {
    username: string,
    password: string
  }
  
  interface user extends users {}
  
  interface AuthContext extends Omit<KoaContext, 'request'> {
    request: {
      body: {
        username: string,
        password: string
      }
    }
  }

}




