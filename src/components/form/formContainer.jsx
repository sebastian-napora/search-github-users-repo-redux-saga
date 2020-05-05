import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormView } from './formView'
import { requestApiCall } from '../../store/actions/github-actions/github-actions'

export const FormContainer = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('')

  const userNameHandler = (e) => setUserName(e.target.value)

  const getUsers = () => dispatch(requestApiCall(userName))

  return <FormView {...{ userNameHandler }} search={() => getUsers()}/>
}
