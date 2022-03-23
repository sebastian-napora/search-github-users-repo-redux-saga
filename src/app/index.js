import React from 'react'

import { FormContainer } from '../components/form/formContainer'
import { GithubRepositoryContainer } from '../components/github-repository/GithubRepositoryContainer'

import '../assets/styles/app.scss'

export const App = () => (
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
