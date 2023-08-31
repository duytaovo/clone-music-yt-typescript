import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Input from 'src/components/Input'

export const NameInput = () => {
  const { userName, setUserName } = useContext(UserContext)
  // const [userName, setUserName] = useState('')
  console.log(userName)
  return (
    <input
      type='text'
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder='Enter your message'
    />
  )
}
