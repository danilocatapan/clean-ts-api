import { AddSurveyParams } from '@/domain/usercases/survey/add-survey'

export interface AddSurveyRepository {
  add (surrveyData: AddSurveyParams): Promise<void>
}
