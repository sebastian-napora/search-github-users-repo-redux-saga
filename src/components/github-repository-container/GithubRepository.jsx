import React from 'react';

export const GithubRepository = ({
  id,
  userName,
  repositories,
  checkedUserName,
  getUserName,
  getRepositories
}) => (
  <div className="accordion" id={`accordionExample ${userName}`}>
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0">
          <button
            className="btn btn-link"
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
                .map(repo => repo.name)
            : null}
        </div>
      </div>
    </div>
  </div>
)