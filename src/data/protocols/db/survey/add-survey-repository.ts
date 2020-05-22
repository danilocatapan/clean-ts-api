import { AddSurveyModel } from '@/domain/usercases/add-survey'

export interface AddSurveyRepository {
  add (surrveyData: AddSurveyModel): Promise<void>
}
