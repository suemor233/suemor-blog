import type { FormEvent} from 'react';
import { useCallback, useReducer } from 'react'
import { message } from 'react-message-popup'

import { auditLink } from '~/api/modules/friends'

const initialState = {
  name: '',
  url: '',
  avatar: '',
  description: '',
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
      message.error('站点标题不能为空')
      return
    }

    if (!state.url) {
      message.error('网站不能为空')
      return
    }
    if (!state.avatar) {
      message.error('头像不能为空')
      return
    }

    if (!state.description) {
      message.error('描述不能为空')
      return
    }
    auditLink(state).then((res) => {
      if (res) {
        message.success('提交成功，请等待博主批准')
        dispatch({ type: 'reset' })
      }
    })
  }, [state])
  return (
    <div className="border-gray-300 border-1 border-opacity-90 rounded-md p-5 relative">
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            name="nick"
            placeholder="站点标题 *"
            className="w-full"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: 'set', data: { name: e.target.value } })
            }
          />
          <input
            type="url"
            name="link"
            placeholder="网站 * https://"
            className="w-full"
            value={state.url}
            autoComplete='on'
            onChange={(e) =>
              dispatch({ type: 'set', data: { url: e.target.value } })
            }
          />
          <input
            type="url"
            name="link"
            placeholder="头像链接 * https://"
            autoComplete='on'
            className="w-full"
            value={state.avatar}
            onChange={(e) =>
              dispatch({ type: 'set', data: { avatar: e.target.value } })
            }
          />
        </div>
        <textarea
          placeholder="描述 *"
          className="w-full break-words min-h-[7rem] mt-2"
          autoComplete='on'
          value={state.description}
          onChange={(e) =>
            dispatch({ type: 'set', data: { description: e.target.value } })
          }
        />
        <div className="absolute bottom-2 right-2">
        <button
          className=" bg-blue-500 py-2 px-3 text-white rounded-xl"
          type="submit"
        >
          申请友链
        </button>
      </div>
      </form>

      
    </div>
  )
}

export default InputArea
