import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestApiCallWithRepositories } from '../../store/actions/github-actions/github-actions'

import { GithubRepository } from './GithubRepository'

export const GithubRepositoryContainer = () => {
  const dispatch = useDispatch()
  const [checkedUserName, setGetUserName] = useState('')

  const users = useSelector(state => state.users.data)
  const repositories = useSelector(state => state.repositories.data)
  console.log(repositories)

  const getUserName = userName => setGetUserName(userName)

  const getRepositories = userName =>  dispatch(requestApiCallWithRepositories(userName))

  return(
    <>
      {
        users
          ? users.map(({ login, id }) => (
              <GithubRepository
                key={login}
                userName={login}
                {...{
                  getUserName,
                  getRepositories,
                  repositories,
                  checkedUserName,
                  id
                }}
              />
            ))
          : ""
      }
    </>
  )
}