import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GithubRepository } from './GithubRepository'

export const GithubRepositoryContainer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [className, setClassName] = useState('collapse');

  const users = useSelector(state => state.github.users);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const classNameHandlers = () => isCollapsed ? setClassName('collapse show') : setClassName('collapse')

  useEffect(() => {
    classNameHandlers()

    return () => {
      classNameHandlers()
    }
  }, [isCollapsed]);

  const userName = users.length ? users.map(user => user.login) : ""

  return(
    <>
      {
        users.length
          ? users.map(login => (
              <GithubRepository
                key={login.login}
                {...{ className, toggleCollapsed }}
                userName={login.login}
              />
            ))
          : ""
      }
    </>
  )
}