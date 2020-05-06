import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { requestApiCallWithRepositories } from '../../store/actions/github-actions/github-actions'
import { useCallbackData, useUserName } from '../../custom-hooks/index'

import { GithubRepository } from './GithubRepository'

export const GithubRepositoryContainer = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false)

  const { userName: userNameFromHook, userNameHandler } = useUserName()

  const { callback } = useCallbackData(requestApiCallWithRepositories, userNameFromHook)

  const users = useSelector(state => state.users.data)
  const repositories = useSelector(state => state.repositories.data)

  const toggleDropdown = () => setIsShowDropdown(!isShowDropdown)

  useEffect(() => {
    callback()
  }, [userNameFromHook]);

  return(
    <>
      {
        users && users.map(({ login }) => (
          <GithubRepository
            key={login}
            userName={login}
            {...{
              isShowDropdown,
              repositories,
              userNameFromHook,
              userNameHandler,
              toggleDropdown
            }}
          />
        ))
      }
    </>
  )
}