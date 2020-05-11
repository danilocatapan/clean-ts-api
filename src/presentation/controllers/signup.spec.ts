import { SignUnController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUnController() // sut > system under test
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmaton: 'any_password'
      }
    }
    const httpResponde = sut.handle(httpRequest)
    expect(httpResponde.statusCode).toBe(400)
    expect(httpResponde.body).toEqual(new MissingParamError('name')) // toEqual validate the value
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignUnController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmaton: 'any_password'
      }
    }
    const httpResponde = sut.handle(httpRequest)
    expect(httpResponde.statusCode).toBe(400)
    expect(httpResponde.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new SignUnController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        passwordConfirmaton: 'any_password'
      }
    }
    const httpResponde = sut.handle(httpRequest)
    expect(httpResponde.statusCode).toBe(400)
    expect(httpResponde.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no password confirmaton is provided', () => {
    const sut = new SignUnController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password'
      }
    }
    const httpResponde = sut.handle(httpRequest)
    expect(httpResponde.statusCode).toBe(400)
    expect(httpResponde.body).toEqual(new MissingParamError('passwordConfirmaton'))
  })
})
