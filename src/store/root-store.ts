import AppUIStore from "./app";
import PostStore from "./post";
import UserStore from "./user";

export interface RootStore {
  appUIStore: AppUIStore
  userStore: UserStore
  postStore: PostStore
}
export class RootStore {
  constructor() {
    this.appUIStore = new AppUIStore()
    this.userStore = new UserStore()
    this.postStore = new PostStore()
  }

  get appStore() {
    return this.appUIStore
  }
}
