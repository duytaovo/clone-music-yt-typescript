import { useContext } from 'react'
import { ChatContext } from 'src/contexts/ChatContext'
import { IMessage } from '../../types/chat'
import { ChatBubble } from './ChatBubble'
import { ChatInput } from './ChatInput'

export const Chat: React.FC = () => {
  const { chat } = useContext(ChatContext)

  return (
    <div className='flex h-full flex-col justify-between' data-testid='chat'>
      <div>
        {chat.messages.map((message: IMessage) => (
          <ChatBubble message={message} key={message.timestamp + (message?.author || 'anonymous')} />
        ))}
      </div>
      <ChatInput />
    </div>
  )
}
