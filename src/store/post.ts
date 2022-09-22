import { makeAutoObservable } from 'mobx'
import { PostsPaginateType } from '~/types/post'



export default class PostStore {
  constructor() {
    makeAutoObservable(this)
  }
  postList: Partial<PostsPaginateType> | null = null

  setPostList(postList: PostsPaginateType) {
    this.postList = postList
  }
}
