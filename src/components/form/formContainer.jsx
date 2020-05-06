import React, { useState } from 'react';

import { Form } from './form'
import { requestApiCall } from '../../store/actions/github-actions/github-actions'
import { useCallbackData } from '../../custom-hooks/index'

export const FormContainer = () => {

  const [userName, setUserName] = useState('')

  const { callback } = useCallbackData(requestApiCall, userName)

  const userNameHandler = e => setUserName(e.target.value)

  return <Form {...{ userNameHandler }} search={callback}/>
}
