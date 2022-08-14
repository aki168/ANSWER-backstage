import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiMagnify, mdiBellRing, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import ListGroup from '../components/ListGroup'
import ListCard from '../components/ListCard'

const Main = () => {
  return (
    <>
    {/* 上方導覽列 */}
      <nav className="container row justify-content-between py-8">
        <div className="col-6 d-flex">
          <h1 className="me-12">Assignment</h1>

          <select className="form-select form-select-sm border-0 fs-4"
            name="AllCourses" id="AllCourses" >
            <option selected disabled={true} >All Courses</option>
            <option value="React">React</option>
            <option value="NodeJs">Node.js</option>
            <option value="MySQL">MySQL</option>
          </select>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Link className="me-6" to="">
            <Icon path={mdiMagnify} size={1} className="text-dark" />
          </Link>
          <Link to="">
            <Icon path={mdiBellRing} size={1} className="text-success" />
          </Link>
        </div>
      </nav>
    {/* 下方主畫面 */}
      <div className="container row">
        <div className="col-4">
        <select className="form-select form-select-sm border-0 fs-4 w-25"
            name="AllCourses" id="AllCourses" >
            <option selected disabled={true} >All (4)</option>
            <option value="React">React</option>
            <option value="NodeJs">Node.js</option>
            <option value="MySQL">MySQL</option>
          </select>
          <ListGroup />
        </div>
        <div className="col-8">
          <ListCard />
        <footer className='d-flex mt-5 justify-content-between'>
        <div>
          <Icon path={mdiChevronLeft} size={1} className="text-dark me-5" />
          <Icon path={mdiChevronRight} size={1} className="text-dark" />
        </div>
        <div>
          <input type="button" value="Mark as read" className='btn px-8 btn-outline-success me-4' />
          <input type="button" value="Reply" className='btn px-8 btn-success' />
        </div>
      </footer>
        </div>



      </div>


    </>
  )
}

export default Main