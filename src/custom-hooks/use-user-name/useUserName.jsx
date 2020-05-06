import { useState } from 'react'

export const useUserName = () => {
  const [userName, setUserName] = useState('')

  const userNameHandler = userName => setUserName(userName)

  return { userName, userNameHandler }
}