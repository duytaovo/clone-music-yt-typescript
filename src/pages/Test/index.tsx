import { ReactNode, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3141')

function Loadingd({ children, styles, className }: any) {
  const [messages, setMessages] = useState<string[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    socket.on('add-new-contact', (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg])
    })
    socket.on('response-add-new-contact', (data: any) => {
      console.log(data)
    })
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (message.trim() !== '') {
      socket.emit('chat message', message)
      setMessage('')
    }
    socket.emit('add-new-contact', { contactId: '1' })
  }
  return (
    <div>
      <div className='App'>
        <div className='Chat'>
          <div className='MessageList'>
            {messages.map((msg, index) => (
              <div key={index} className='Message'>
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className='MessageForm'>
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter your message'
            />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Loadingd
