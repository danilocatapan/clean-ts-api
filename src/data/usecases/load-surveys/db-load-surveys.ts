import { LoadSurveys } from '../../../domain/usercases/load-surveys'
import { SurveyModel } from '../../../domain/models/survey'
import { LoadSurveysRepository } from '../../protocols/db/survey/load-survey-repository'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRespository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRespository.loadAll()
    return surveys
  }
}
