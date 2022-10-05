import client from "../umi-request"

export interface PageType {
  pageCurrent: number
  pageSize: number
}

export function postPaginate(params: PageType) {
  return client.get(`/post`, { params} )
}


export function fetchPostById(id: string) {
  return client.get(`/post/${id}`)
}