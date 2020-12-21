export interface LoadAnswersBySurvey {
  loadByAnswers: (id: string) => Promise<LoadAnswersBySurvey.Result>
}

export namespace LoadAnswersBySurvey {
  export type Result = string[]
}
