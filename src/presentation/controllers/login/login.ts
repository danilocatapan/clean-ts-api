import { Controller, HttpRequest, HttpResponse, Authentication, Validation } from './login-protocols'
import { badRequest, serverError, unauthorized, ok } from '../../helpers/http/http-helper'

export class LoginController implements Controller {
  private readonly validation: Validation
  private readonly authentication: Authentication

  constructor (authentication: Authentication, validation: Validation) {
    this.validation = validation
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const acessToken = await this.authentication.auth({
        email,
        password
      })
      if (!acessToken) {
        return unauthorized()
      }
      return ok({ acessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
