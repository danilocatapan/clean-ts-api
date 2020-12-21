import { AddSurvey, LoadAnswersBySurvey, LoadSurveys, CheckSurveyById } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { mockSurveyModels } from '@/tests/domain/mocks'

import faker from 'faker'

export class AddSurveySpy implements AddSurvey {
  addSurveyParams: AddSurvey.Params

  async add (data: AddSurvey.Params): Promise<void> {
    this.addSurveyParams = data
    return Promise.resolve()
  }
}

export class LoadSurveysSpy implements LoadSurveys {
  surveyModels = mockSurveyModels()
  accountId: string

  async load (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return Promise.resolve(this.surveyModels)
  }
}

export class LoadAnswersBySurveySpy implements LoadAnswersBySurvey {
  result = [faker.random.word(), faker.random.word()]
  id: string

  async loadByAnswers (id: string): Promise<LoadAnswersBySurvey.Result> {
    this.id = id
    return this.result
  }
}

export class CheckSurveyByIdSpy implements CheckSurveyById {
  result = true
  id: string

  async checkById (id: string): Promise<CheckSurveyById.Result> {
    this.id = id
    return Promise.resolve(this.result)
  }
}
