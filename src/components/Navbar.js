import React from "react"
import { Link } from "react-router-dom"
import Icon from '@mdi/react'
import { mdiChartBox, mdiForum, mdiClipboardText, mdiPlayBoxMultiple, mdiAccountMultiple, mdiCog  } from '@mdi/js';


export default function Navbar() {

  const path = 'https://raw.githubusercontent.com/aki168/ANSWER-backstage/main/public/images/';

  return (//flex-shrink-0
    <nav className="d-flex flex-column col-3 py-8 ps-0 bg-light vh-100" >

      <Link to="/" className="d-flex align-items-center mb-8 ps-8">
        <img src="images/logo-ANSWER.svg" alt="LOGO" />
      </Link>

      <ul className="nav nav-pills flex-column mb-auto">

        <li className="nav-item border-start border-4 border-light mb-6">
          <Link to="admin" className="nav-link fw-bold link-dark ps-8" aria-current="page">
            <Icon path={mdiChartBox} size={1} className="text-dark me-4" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item border-start border-4 border-light mb-6">
          <Link to="admin" className="nav-link fw-bold link-dark ps-8" aria-current="page">
            <Icon path={mdiForum} size={1} className="text-dark me-4" />
            Question
          </Link>
        </li>

        <li className="nav-item border-start border-4 border-success mb-6">
          <Link to="/" className="nav-link link-success fw-bold ps-8" aria-current="page">
            <Icon path={mdiClipboardText} size={1} className="text-success me-4" />
            Assignment
          </Link>
        </li>

        <li className="nav-item border-start border-4 border-light mb-6">
          <Link to="admin" className="nav-link fw-bold link-dark ps-8" aria-current="page">
            <Icon path={mdiPlayBoxMultiple} size={1} className="text-dark me-4" />
            Course
          </Link>
        </li>

        <li className="nav-item border-start border-4 border-light mb-6">
          <Link to="admin" className="nav-link fw-bold link-dark ps-8" aria-current="page">
            <Icon path={mdiAccountMultiple} size={1} className="text-dark me-4" />
            Admin
          </Link>
        </li>

        <li className="nav-item border-start border-4 border-light mb-6">
          <Link to="admin" className="nav-link fw-bold link-dark ps-8" aria-current="page">
            <Icon path={mdiCog} size={1} className="text-dark me-4" />
            Settings
          </Link>
        </li>

      </ul>

      <div className="ps-8 d-flex">
          <img src="images/andychen.jpeg" alt="user" width="40" height="40" className="rounded-circle me-2" />
          <div className="ms-4">
            <strong>Andy Chen</strong>
            <p className="text-secondary">andy0401@mail.com</p> 
          </div>
      </div>
    </nav>
  )
}

