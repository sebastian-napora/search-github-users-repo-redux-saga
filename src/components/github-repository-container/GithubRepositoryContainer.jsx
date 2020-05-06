import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestApiCallWithRepositories } from '../../store/actions/github-actions/github-actions'

import { GithubRepository } from './GithubRepository'

export const GithubRepositoryContainer = () => {
  const dispatch = useDispatch()
  const [checkedUserName, setGetUserName] = useState('')
  const [isShowDropdown, setIsShowDropdown] = useState(false)

  const users = useSelector(state => state.users.data)
  const repositories = useSelector(state => state.repositories.data)

  const toggleDropdown = () => setIsShowDropdown(!isShowDropdown)

  const getUserName = userName => setGetUserName(userName)

  const getRepositories = userName =>  dispatch(requestApiCallWithRepositories(userName))

  return(
    <>
      {
        users
          ? users.map(({ login }) => (
              <GithubRepository
                key={login}
                userName={login}
                {...{
                  isShowDropdown,
                  repositories,
                  checkedUserName,
                  getUserName,
                  getRepositories,
                  toggleDropdown
                }}
              />
            ))
          : ""
      }
    </>
  )
}