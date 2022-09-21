import AppUIStore from "./app";
import UserStore from "./user";

export interface RootStore {
  appUIStore: AppUIStore
  userStore: UserStore
}
export class RootStore {
  constructor() {
    this.appUIStore = new AppUIStore()
    this.userStore = new UserStore()
  }


  get appStore() {
    return this.appUIStore
  }
}
