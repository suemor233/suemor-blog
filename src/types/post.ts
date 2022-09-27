export interface PostsPaginateType extends PaginateType {
  postList: postType[]
}

export interface PaginateType {
  totalCount: number
  totalPages: number
}

export interface postType {
  _id: string
  title: string
  content: string
  tags: string[]
  category: categoryType
  created: string
}

export interface categoryType {
  created:string
  name:string
  slug:string
  _id:string
}
