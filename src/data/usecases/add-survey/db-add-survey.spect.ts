import { DbAddSurvey } from './db-add-survey'
import { AddSurveyModel, AddSurveyRepository } from './db-add-survey-protocols'

const makeFakeSurveyData = (): AddSurveyModel => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }]
})

describe('DbAddSurvey UserCase', () => {
  test('Should call AddSurveyRepository with corret values', async () => {
    class AddSurveyRepositoyStub implements AddSurveyRepository {
      async add (surrveyData: AddSurveyModel): Promise<void> {
        return new Promise(resolve => resolve())
      }
    }
    const addSurveyRepositoyStub = new AddSurveyRepositoyStub()
    const addSpy = jest.spyOn(addSurveyRepositoyStub, 'add')
    const sut = new DbAddSurvey(addSurveyRepositoyStub)
    const surveyData = makeFakeSurveyData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })
})
