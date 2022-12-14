import client from '../umi-request'

export interface FriendsType {
  _id: string
  name: string
  url: string
  avatar: string
  description: string
  state: number
  created: string
}

export function getAllFriends() {
  return client.get(`/friends/all`)
}

export function auditLink(data: Partial<FriendsType>) {
  return client.post(`/friends/audit`,{data})
}
