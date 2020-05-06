import React from 'react'

import './card-repository.scss'

import { starIcon } from '../../../assets/icons/icons'

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
      <p className="card-text">
        { description }
      </p>
    </div>
  </div>
)