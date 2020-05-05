import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestApiCallWithRepositories } from '../../store/actions/githubRepo'

import { GithubRepository } from './GithubRepository'

export const GithubRepositoryContainer = () => {
  const dispatch = useDispatch()
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [className, setClassName] = useState('collapse');

  const users = useSelector(state => state.github.data);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const classNameHandlers = () => isCollapsed ? setClassName('collapse show') : setClassName('collapse')

  useEffect(() => {
    classNameHandlers()

    return () => {
      classNameHandlers()
    }
  }, [isCollapsed]);

  const getRepositories = userName =>  dispatch(requestApiCallWithRepositories(userName))

  return(
    <>
      {
        users
          ? users.map(login => (
              <GithubRepository
                key={login.login}
                {...{ className, toggleCollapsed, getRepositories }}
                userName={login.login}
              />
            ))
          : ""
      }
    </>
  )
}