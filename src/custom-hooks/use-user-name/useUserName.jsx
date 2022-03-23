import { useState } from 'react'

export const useUserName = () => {
  const [userName, setUserName] = useState('')

  /**
   * @function userNameHandler
   * @description This functionn updated a searching userName profile.
  */
  const userNameHandler = userName => setUserName(userName)

  return { userName, userNameHandler }
}