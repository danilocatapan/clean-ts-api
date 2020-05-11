import { SignUnController } from './signup'

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
    expect(httpResponde.body).toEqual(new Error('Missing param: name')) // toEqual validate the value
  })
})
