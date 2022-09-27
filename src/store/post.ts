import { makeAutoObservable } from 'mobx'
import type { PostsPaginateType } from '~/types/post'



export default class PostStore {
  constructor() {
    makeAutoObservable(this)
  }
  postList: Partial<PostsPaginateType> | null = null

  setPostList(postList: PostsPaginateType) {
    this.postList = postList
  }
}
