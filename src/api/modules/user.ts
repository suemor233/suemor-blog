import client from "~/api/umi-request";

export function userInfo() {
  return client.get('/user')
}