import { handle } from 'hono/vercel'
import { app } from '../dist/servidor/app.js'
// import { Hono } from 'hono'

console.log({app})

// const app = new Hono().basePath('/')
//
// app.get('/', (c) => {
//   return c.json({
//     message: 'Hello World!',
//   })
// })


export const config = {
  runtime: 'edge',
}

export default handle(app)

// export const GET = handle(app)
