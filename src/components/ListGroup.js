import React from 'react'
import { Link } from 'react-router-dom'

const ListGroup = () => {
  return (
    <div className="list-group">


      <Link to="/" className="list-group-item list-group-item-action active py-3" aria-current="true">
        <div className="d-flex w-100 justify-content-between mb-1">
          <p className="fs-3 mb-0">Chapter Assignment 2</p>
          <p className="text-3 fs-3 mb-0">4 hrs ago</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold mb-0">Please check this file…</p>
          <p className="text-muted fs-3 mb-0">Emily Wang</p>
        </div>
      </Link>

      <Link to="/" className="list-group-item list-group-item-action py-3" aria-current="true">
        <div className="d-flex w-100 justify-content-between mb-1">
          <p className="fs-3 mb-0">Chapter Assignment 1</p>
          <p className="text-3 fs-3 mb-0">12 hrs ago</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold mb-0">My Homework</p>
          <p className="text-muted fs-3 mb-0">David Xu</p>
        </div>
      </Link>

      <Link to="/" className="list-group-item list-group-item-action py-3" aria-current="true">
        <div className="d-flex w-100 justify-content-between mb-1">
          <p className="fs-3 mb-0">Final Assignment</p>
          <p className="text-3 fs-3 mb-0">18 hrs ago</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold mb-0">Have a problem with this…</p>
          <p className="text-muted fs-3 mb-0">Tony Wei</p>
        </div>
      </Link>
      <Link to="/" className="list-group-item list-group-item-action py-3" aria-current="true">
        <div className="d-flex w-100 justify-content-between mb-1">
          <p className="fs-3 mb-0">Final Assignment</p>
          <p className="text-3 fs-3 mb-0">19 hrs ago</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold mb-0">Did I do it right?</p>
          <p className="text-muted fs-3 mb-0">Christina Lin</p>
        </div>
      </Link>

  
    </div>

  )
}

export default ListGroup