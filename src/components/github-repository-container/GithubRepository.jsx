import React from 'react'

import { CardRepository } from './card-repository/CardRepository'

import './github-repository.scss'

export const GithubRepository = ({
  userName,
  repositories,
  checkedUserName,
  getUserName,
  getRepositories
}) => (
  <div className="card-users" id={`card-${userName}`}>
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0 user-name">
          <button
            className="btn btn__user"
            type="button"
            data-toggle="collapse"
            aria-expanded={false}
            onClick={() => {
              getUserName(userName)
              getRepositories(userName)
            }}
          >
            { userName }
          </button>
        </h2>
      </div>

      <div className={checkedUserName === userName ? 'collapse show' : 'collapse'}>
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