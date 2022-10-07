import message from 'react-message-popup'
import { extend } from 'umi-request'

import { API_URL } from '~/constants/env'
import { isClientSide } from '~/utils/env'

/**
 * 配置request请求时的默认参数
 */
const client = extend({
  prefix: API_URL,
  timeout: 5000,
  errorHandler: undefined
})
// request拦截器, 改变url 或 options
client.interceptors.request.use(
  (url: string, options: any) => {
    return {
      url,
      options: { ...options },
    }
  },
  { global: false },
)

client.interceptors.response.use(async (response: any) => {
  const res = await response.clone().json()
  if (res.ok === 0 && isClientSide()) {
    if (Array.isArray(res.message)) {
      message.error(res.message[0])
    } else {
      message.error(res.message)
    }
    return undefined
  }

  return response
})

export default client
