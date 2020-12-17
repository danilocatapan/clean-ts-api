import { AccountModel } from '@/domain/models'

export type AddAccountParams = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (accountParams: AddAccountParams) => Promise<AccountModel>
}
