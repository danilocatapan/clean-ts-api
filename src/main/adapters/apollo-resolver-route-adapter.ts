import { Controller } from '@/presentation/protocols'
import { UserInputError, AuthenticationError, ForbiddenError, ApolloError } from 'apollo-server-express'

export const adaptResolver = async (controller: Controller, args: any): Promise<any> => {
  const httpResponse = await controller.handle(args)
  switch (httpResponse.statusCode) {
    case 200:
    case 204: return httpResponse.body
    case 400: return new UserInputError(httpResponse.body.message)
    case 401: return new AuthenticationError(httpResponse.body.message)
    case 403: return new ForbiddenError(httpResponse.body.message)
    default: return new ApolloError(httpResponse.body.message)
  }
}
