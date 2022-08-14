import React from "react"
import {Link} from "react-router-dom"


export default function Navbar() {
  return (//flex-shrink-0
    <nav className="d-flex flex-column col-3 p-3 bg-light vh-100" >
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><Link to="#bootstrap"></Link></svg>
      <span className="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="admin" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><Link to="#home"></Link></svg>
          Home
        </Link>
      </li>
      <li>
        <Link to="admin" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><Link to="#speedometer2"></Link></svg>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><Link to="#table"></Link></svg>
          Orders
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><Link to="#grid"></Link></svg>
          Products
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><Link to="#people-circle"></Link></svg>
          Customers
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><Link className="dropdown-item" to="#">New project...</Link></li>
        <li><Link className="dropdown-item" to="#">Settings</Link></li>
        <li><Link className="dropdown-item" to="#">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
      </ul>
    </div>
  </nav>
  )
}

