export interface PostsPaginateType extends PaginateType {
  postList: postItemType[]
}

export interface PaginateType {
  totalCount: number
  totalPages: number
}

export interface postType {
  post: postItemType
  last?: switchType
  next?: switchType
}

export interface postItemType {

    _id: string
    title: string
    content: string
    tags: string[]
    category: categoryType
    created: string

}

export interface categoryType {
  created: string
  name: string
  slug: string
  _id: string
}

export interface switchType {
  _id: string
  title: string
}
