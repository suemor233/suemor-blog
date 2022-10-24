import type { FormEvent} from 'react';
import { useCallback, useReducer } from 'react'
import { message } from 'react-message-popup'

const initialState = {
  name: '',
  url: '',
  email: '',
  comment: '',
}

type Action =
  | { type: 'set'; data: Partial<typeof initialState> }
  | { type: 'reset' }

const useFormData = () => {
  const [state, dispatch] = useReducer(
    (state: typeof initialState, payload: Action) => {
      switch (payload.type) {
        case 'set':
          return { ...state, ...payload.data }
        case 'reset':
          return initialState
      }
    },
    { ...initialState },
  )
  return [state, dispatch] as const
}

const InputArea = () => {
  const [state, dispatch] = useFormData()
  const handleSubmit = useCallback((e:FormEvent) => {
    e.preventDefault()
    if (!state.name) {
      message.error('昵称不能为空')
      return
    }

    if (!state.url) {
      message.error('网站不能为空')
      return
    }
    if (!state.comment) {
      message.error('评论不能为空')
      return
    }
    message.info('抱歉，评论功能正在开发中，暂不可用🥲')
    // auditLink(state).then((res) => {
    //   if (res) {
    //     message.success('提交成功，请等待博主批准')
    //     dispatch({ type: 'reset' })
    //   }
    // })
  }, [state])
  return (
    <div className="card-border p-5 relative">
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            name="nick"
            placeholder="昵称 *"
            className="w-full"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: 'set', data: { name: e.target.value } })
            }
            onFocus={() => message.info('抱歉，评论功能正在开发中，暂不可用🥲')}
          />

<input
            type="email"
            name="email"
            placeholder="邮箱 *"
            autoComplete='on'
            className="w-full"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'set', data: { email: e.target.value } })
            }
            onFocus={() => message.info('抱歉，评论功能正在开发中，暂不可用🥲')}
          />

          <input
            type="url"
            name="link"
            placeholder="网站 https://"
            className="w-full"
            value={state.url}
            autoComplete='on'
            onChange={(e) =>
              dispatch({ type: 'set', data: { url: e.target.value } })
            }
            onFocus={() => message.info('抱歉，评论功能正在开发中，暂不可用🥲')}
          />
      
        </div>
        <textarea
          placeholder="留下你的评论吧 *"
          className="w-full break-words min-h-[8rem] mt-2"
          autoComplete='on'
          value={state.comment}
          onChange={(e) =>
            dispatch({ type: 'set', data: { comment: e.target.value } })
          }
          onFocus={() => message.info('抱歉，评论功能正在开发中，暂不可用🥲')}
        />
        <div className="absolute bottom-2 right-2">
        <button
          className=" bg-blue-500 py-2 px-4 text-white rounded-xl"
          type="submit"
        >
          提交
        </button>
      </div>
      </form>

      
    </div>
  )
}

export default InputArea
