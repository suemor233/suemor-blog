import client from '../umi-request'


export interface PagePostType {
  _id: string;
  title: string;
  content: string;
  slug: string;
  created: string
}

export function getPageBySlug(slug:string):Promise<PagePostType> {
  return client.get(`/page/slug/${slug}`)
}
