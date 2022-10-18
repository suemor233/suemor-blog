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

export function fetchPostByCategory(slug: string,params: PageType) {
  return client.get(`/post/category/${slug}`,{params})
}

export function fetchPostByCTag(slug: string,params: PageType) {
  return client.get(`/post/tag/${slug}`,{params})
}