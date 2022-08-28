import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        <section className='d-flex p-3'>
          <div className=''
            style={{
              width: "140px",
              height: "140px",
              backgroundImage: `url('${props.img}')`,
              backgroundPosition: "center center",
              backgroundSize: "cover"
            }}
            alt="user" />
          <div style={{width:'80%'}} className='ps-5'>
            <p className='mb-1'>#1</p>
            <h5 className='mb-1'>Admin</h5>
            <h2 className='mb-2'>Emir Wicks</h2>
            <p className='mb-2 text-secondary'>emir.wicks@mail.com</p>
            <p className='mb-0'>Verified</p>
          </div>
          <button onClick={props.onHide} class="btn-close" aria-label="Close"></button>
        </section>
      </Modal.Body>
      <Modal.Footer className='border-0'>
        <button className='btn btn-outline-danger' onClick={props.onHide}>Deactivate</button>
        <button className='btn btn-success' onClick={props.onHide}>Edit</button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal