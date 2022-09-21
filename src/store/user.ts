import { makeAutoObservable } from 'mobx'

export interface UserModel {
  username:string
  avatar:string
  socialIds:Record<string,any>
}

export default class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
  master: Partial<UserModel> | null = null

  setUser(model: UserModel) {
    this.master = model
  }

  get username() {
    return this.master?.username || ''
  }
}
