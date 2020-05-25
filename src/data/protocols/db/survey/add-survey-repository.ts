import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add (surrveyData: AddSurveyParams): Promise<void>
}
