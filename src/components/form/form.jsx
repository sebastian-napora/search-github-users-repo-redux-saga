import React from 'react';

export const Form = ({ search, userNameHandler }) => (
  <form onSubmit={e => { e.preventDefault(); search() }}>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        onChange={userNameHandler}
        placeholder="Enter username"
      />
    </div>
    <button className="btn btn-primary w-100">
      Search
    </button>
  </form>
)