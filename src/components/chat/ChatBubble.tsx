import { useContext } from 'react'
import { RoomContext } from '../../contexts/RoomContext'
import { IMessage } from '../../types/chat'
import classNames from 'classnames'
import { UserContext } from '../../contexts/UserContext'

export const ChatBubble: React.FC<{ message: IMessage }> = ({ message }) => {
  const { peers } = useContext(RoomContext)
  const { userId } = useContext(UserContext)
  const author = message.author && peers[message.author]?.userName
  const userName = author || 'Anonimus'
  const isSelf = message.author === userId
  const time = new Date(message.timestamp).toLocaleTimeString()
  return (
    <div
      className={classNames('m-2 flex', {
        'justify-end pl-10': isSelf,
        'justify-start pr-10': !isSelf
      })}
    >
      <div className='flex flex-col'>
        <div
          className={classNames('inline-block rounded py-2 px-4', {
            'bg-red-200': isSelf,
            'bg-red-300': !isSelf
          })}
        >
          {message.content}
          <div
            className={classNames('text-xs opacity-50', {
              'text-right': isSelf,
              'text-left': !isSelf
            })}
          >
            {time}
          </div>
        </div>
        <div
          className={classNames('text-md', {
            'text-right': isSelf,
            'text-left': !isSelf
          })}
        >
          {isSelf ? 'You' : userName}
        </div>
      </div>
    </div>
  )
}
