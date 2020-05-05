import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormView } from './formView'
import { requestApiCall } from '../../store/actions/githubRepo'


 const FormContainer = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.github);
   console.log(post.data)

  const [userName, setUserName] = useState('')

  const userNameHandler = (e) => setUserName(e.target.value)

  const getUsers = () => {
    // const { data } = await repositoriesService.get(userName)
    // const username = data.items.map(user => user.login)
    // const data2 = await repositoriesService.getRepositories(username[0])
    // console.log(data2)
    // console.log(data)
    // console.log(username)
    // dispatch(mySaga())
    // In a React component
    dispatch(requestApiCall(userName))
   }

  return <FormView {...{ userNameHandler }} search={() => getUsers()}/>
}

export default FormContainer
