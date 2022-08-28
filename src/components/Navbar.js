import React from "react"
import { Link } from "react-router-dom"
import Icon from '@mdi/react'
import { mdiChartBox, mdiForum, mdiClipboardText, mdiPlayBoxMultiple, mdiAccountMultiple, mdiCog  } from '@mdi/js';
import { useState } from "react";




export default function Navbar() {

  const path = 'https://raw.githubusercontent.com/aki168/ANSWER-backstage/main/public/images/';

  const [toggleState, setToggleState] = useState("assignment");

  const addStyle = (index) => {
    setToggleState(index);
  }

  
  
  return (//flex-shrink-0
    <nav className="d-flex flex-column col-3 py-8 ps-0 bg-light min-vh-100" >

      <Link to="/" className="d-flex align-items-center mb-8 ps-8">
        <img src="images/logo-ANSWER.svg" alt="LOGO" />
      </Link>

      <ul className="nav nav-pills flex-column mb-auto">

        <li className={`nav-item border-start border-4 border-${toggleState==="dashboard" ? "success" : "light" } mb-6 `} 
          onClick={() => addStyle("dashboard")}>
          <Link to="admin" className={`nav-link fw-bold link-${toggleState==="dashboard" ? "success" : "dark" } ps-8`} aria-current="page">
            <Icon path={mdiChartBox} size={1} className="me-4" />
            Dashboard
          </Link>
        </li>

        <li className={`nav-item border-start border-4 border-${toggleState==="question" ? "success" : "light" } mb-6`} 
          onClick={() => addStyle("question")}>
          <Link to="/" className={`nav-link fw-bold link-${toggleState==="question" ? "success" : "dark" } ps-8`} aria-current="page">
            <Icon path={mdiForum} size={1} className="me-4" />
            Question
          </Link>
        </li>

        <li className={`nav-item border-start border-4 border-${toggleState==="assignment" ? "success" : "light" } mb-6`} 
          onClick={() => addStyle("assignment")}>
          <Link to="/" className={`nav-link fw-bold link-${toggleState==="assignment" ? "success" : "dark" } ps-8`} aria-current="page">
            <Icon path={mdiClipboardText} size={1} className="me-4" />
            Assignment
          </Link>
        </li>

        <li className={`nav-item border-start border-4 border-${toggleState==="course" ? "success" : "light" } mb-6`}  
          onClick={() => addStyle("course")}>
          <Link to="admin" className={`nav-link fw-bold link-${toggleState==="course" ? "success" : "dark" } ps-8`} aria-current="page">
            <Icon path={mdiPlayBoxMultiple} size={1} className="me-4" />
            Course
          </Link>
        </li>

        <li className={`nav-item border-start border-4 border-${toggleState==="admin" ? "success" : "light" } mb-6`}  
          onClick={() => addStyle("admin")}>
          <Link to="admin" className={`nav-link fw-bold link-${toggleState==="admin" ? "success" : "dark" } ps-8`} aria-current="page">
            <Icon path={mdiAccountMultiple} size={1} className="me-4" />
            Admin
          </Link>
        </li>

        <li className={`nav-item border-start border-4 border-${toggleState==="settings" ? "success" : "light" } mb-6`}  
          onClick={() => addStyle("settings")}>
          <Link to="/" className={`nav-link fw-bold link-${toggleState==="settings" ? "success" : "dark" } ps-8`} aria-current="page">
            <Icon path={mdiCog} size={1} className="me-4" />
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

