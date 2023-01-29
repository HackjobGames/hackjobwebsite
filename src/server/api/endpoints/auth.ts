import passport from 'passport'
import { Strategy as LocalStrategy }  from 'passport-local'
import { query } from '../../util'
import bcrypt from 'bcrypt'


passport.serializeUser((user: user, done) => {
  done(null, user.username)
})

passport.deserializeUser(async (username: string, done) => {
  const user = (await query(`select * from users where username = ${username}`))[0]
  done(null, user)
})

passport.use(new LocalStrategy(async (username: string, password: string, done) => {
  const user: user = (await query(`select * from users where username = '${username}' or email = '${username}'`))[0]
  if (!user) {
    return done(new Error("User does not exist"))
  } else if(bcrypt.compareSync(bcrypt.hashSync(password, 10), user.hash)) {
    return done(null, user)
  }
  return done(new Error("Username or Password is incorrect"))
}))

export const signUp = async (ctx: AuthContext) => {
  if(!ctx.request.body.username.match('^[A-Za-z0-9_-]*$')) {
    ctx.status = 500
    ctx.body = 'UserName Must Only Be Letters And Numbers'
  } else if (ctx.request.body.password === '') {
    ctx.status = 500
    ctx.body = 'Password Cannot Be Empty'
  } else {
    const salt = await bcrypt.genSalt(10)
    try {
      await query(`insert into public.users (username, hash) values ('${ctx.request.body.username}', '${await bcrypt.hash(ctx.request.body.password, salt)}')`)
      ctx.body = 'User Successfully Created'
      ctx.status = 200
    } catch (e) {
      ctx.status = 500
      ctx.body ='UserName Already Taken'
    }
  }
}

export const signIn = async (ctx: AuthContext, next) => {
  const body: signInBody = ctx.request.body as signInBody
  if (!body.username.match('^[A-Za-z0-9_-]*$')) {
    ctx.response.status = 500;
    ctx.body = 'UserName or Password is incorrect'
  } else {
    passport.authenticate('local', (err, user) => {
      if (err) {
        ctx.body = 'Username or Password is incorrect'
        throw err
      } else {
        ctx.status = 200
      }
    })(ctx.req, ctx.res, next('/'))
  }
}

export const signOut = async (ctx: KoaContext, next) => {
  ctx.request.logout(function(err) {
    if (err) { return next(err); }
    ctx.redirect('/');
  });
  ctx.response.status = 200
}

