import React from 'react'

import { FormContainer } from './form/formContainer'
import { GithubRepositoryContainer } from './github-repository/GithubRepositoryContainer'

export const Content = () => (
  <div className="content">
    <div className="container">
      <div className="row d-flex justify-content-center w-100">
        <div className="col-xl-12 w-100">
          <FormContainer />
        </div>
        <div className="col-xl-12 w-100">
          <GithubRepositoryContainer />
        </div>
      </div>
    </div>
  </div>
)