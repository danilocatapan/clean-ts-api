import { DbAddSurvey } from './db-add-survey'
import { AddSurveyModel, AddSurveyRepository } from './db-add-survey-protocols'
import MockDate from 'mockdate'

const makeFakeSurveyData = (): AddSurveyModel => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
})

const makeAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surrveyData: AddSurveyModel): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddSurveyRepositoryStub()
}

interface SutTypes {
  sut: DbAddSurvey
  addSurveyRepositoyStub: AddSurveyRepository
}

const makeSut = (): SutTypes => {
  const addSurveyRepositoyStub = makeAddSurveyRepository()
  const sut = new DbAddSurvey(addSurveyRepositoyStub)
  return {
    sut,
    addSurveyRepositoyStub
  }
}

describe('DbAddSurvey UserCase', () => {
  beforeAll(() => {
    const date = new Date()
    MockDate.set(date.getTime())
  })

  beforeAll(() => {
    MockDate.reset()
  })
  test('Should call AddSurveyRepository with corret values', async () => {
    const { sut, addSurveyRepositoyStub } = makeSut()
    const addSpy = jest.spyOn(addSurveyRepositoyStub, 'add')
    const surveyData = makeFakeSurveyData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })

  test('Should throw if AddSurveyRepositoy throws', async () => {
    const { sut, addSurveyRepositoyStub } = makeSut()
    jest.spyOn(addSurveyRepositoyStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakeSurveyData())
    await expect(promise).rejects.toThrow()
  })
})
