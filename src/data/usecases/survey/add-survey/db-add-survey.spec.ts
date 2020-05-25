import { DbAddSurvey } from './db-add-survey'
import { AddSurveyRepository } from './db-add-survey-protocols'
import { mockAddSurveyRepository } from '@/data/test'
import { throwError, mockAddSurveyParams } from '@/domain/test'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DbAddSurvey
  addSurveyRepositoyStub: AddSurveyRepository
}

const makeSut = (): SutTypes => {
  const addSurveyRepositoyStub = mockAddSurveyRepository()
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

  afterAll(() => {
    MockDate.reset()
  })
  test('Should call AddSurveyRepository with corret values', async () => {
    const { sut, addSurveyRepositoyStub } = makeSut()
    const addSpy = jest.spyOn(addSurveyRepositoyStub, 'add')
    const surveyData = mockAddSurveyParams()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })

  test('Should throw if AddSurveyRepositoy throws', async () => {
    const { sut, addSurveyRepositoyStub } = makeSut()
    jest.spyOn(addSurveyRepositoyStub, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddSurveyParams())
    await expect(promise).rejects.toThrow()
  })
})
