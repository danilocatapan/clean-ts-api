import { SurveyResultModel } from '@/domain/models'

export interface LoadSurveyResult {
  load: (surveyId: string, accountId: String) => Promise<SurveyResultModel>
}
