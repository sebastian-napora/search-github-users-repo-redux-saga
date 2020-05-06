import React from 'react'

import { CardRepository } from './card-repository/CardRepository'
import { chevronUp, chevronDown } from '../../assets/icons/icons'

import './github-repository.scss'

export const GithubRepository = ({
  userName,
  repositories,
  userNameFromHook,
  userNameHandler,
  isShowDropdown,
  toggleDropdown
}) => (
  <div className="card-users">
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0 user-name">
          <button
            className="btn btn__user"
            type="button"
            data-toggle="collapse"
            onClick={() => {
              userNameHandler(userName)
              toggleDropdown()
            }}
          >
              { userName }
              {
                (userNameFromHook === userName && isShowDropdown)
                  ? chevronDown
                  : chevronUp
              }
          </button>
        </h2>
      </div>

      <div className={(userNameFromHook === userName && isShowDropdown) ? 'collapse show' : 'collapse'}>
        <div className="card-body">
          {repositories
            ? repositories
                .filter(repo => repo.owner.login === userName)
                .map(({ name, stargazers_count, description }) => (
                  <CardRepository key={name} {...{ name, stargazers_count, description }} />
                ))
            : null}
        </div>
      </div>
    </div>
  </div>
)