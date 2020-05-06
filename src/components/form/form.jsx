import React from 'react';

export const Form = ({ search, userNameHandler }) => (
  <>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        onChange={userName => userNameHandler(userName)}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter username"
      />
    </div>
    <button
      type="button"
      className="btn btn-primary w-100"
      onClick={() => search()}
    >
      Search
    </button>
  </>
)