import client from '~/api/umi-request'


export function allArchiveRequest():Promise<AllArchiveType> {
  return client.get('/archive')
}

export interface AllArchiveType {
  posts: Post[];
  count: number;
}

interface Post {
  _id: string;
  title: string;
  tags: string[];
  category: Category;
  created: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  created: string;
}