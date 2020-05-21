import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoginController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'

export default (router: Router): void => {
  router.post('/surveys', adaptRoute(makeLoginController()))
}
