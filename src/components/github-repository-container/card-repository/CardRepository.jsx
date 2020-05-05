import React from 'react'

import './card-repository.scss'

const starIcon = (
  <svg class="bi bi-star-fill" width="1.2em" height="1.em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
)

export const CardRepository = ({ name, stargazers_count, description }) => (
  <div className="card">
    <div className="card-body">
      <div className="card-header">
        <h5 className="card-title">
          { name }
        </h5>
        <h5 className="card-subtitle mb-2 text-muted d-flex justify-content-center align-items-center">
          <span className="card-subtitle__element">
            { stargazers_count }
          </span>
          <span className="card-subtitle__element">
            { starIcon }
          </span>
        </h5>
      </div>
      <p className="card-text">{ description }</p>
    </div>
  </div>
)