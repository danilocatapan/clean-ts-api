import { RequestHandler } from 'express'

export const contentType: RequestHandler = (resquest, response, next) => {
  response.type('json')
  next()
}
