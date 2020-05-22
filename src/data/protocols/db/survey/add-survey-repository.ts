import { AddSurveyModel } from '@/domain/usercases/survey/add-survey'

export interface AddSurveyRepository {
  add (surrveyData: AddSurveyModel): Promise<void>
}
