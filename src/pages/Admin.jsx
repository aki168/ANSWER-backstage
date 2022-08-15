import {useState} from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiMagnify, mdiBellRing, mdiArrowDown, mdiEye, mdiPencil } from '@mdi/js'
import { useEffect } from 'react'

const Admin = () => {

  const userData = [
    { ID: "#1", Name: "Emir Wicks", Email: "emir.wicks@mail.com", Verified: "Yes" },
    { ID: "#2", Name: "Zaina Goldsmith", Email: "zaina.goldsmith@mail.com", Verified: "Yes" },
    { ID: "#3", Name: "Mahima Lopez", Email: "mahima.lopez@mail.com", Verified: "Yes" },
    { ID: "#4", Name: "Pharrell Murray", Email: "pharrell.murray@mail.com", Verified: "Yes" },
    { ID: "#5", Name: "Annika Mcbride", Email: "annika.mcbride@mail.com", Verified: "Yes" },
    { ID: "#6", Name: "Fatimah Clark", Email: "fatimah.clark@mail.com", Verified: "Yes" },
    { ID: "#7", Name: "Klaudia Rhodes", Email: "klaudia.rhodes@mail.com", Verified: "Yes" },
    { ID: "#8", Name: "Tillie Lucero", Email: "tillie.lucero@mail.com", Verified: "Yes" },
    { ID: "#9", Name: "Sabrina Stephenson", Email: "sabrina.stephenson@mail.com", Verified: "Yes" },
    { ID: "#10", Name: "Annie Smith", Email: "annie.smith@mail.com", Verified: "Yes" }
  ]

  // const [data, setData] = useState('');

  // useEffect(()=>{
  //   setData(userData)
  // },[])


  return (
    <>
      <nav className="container row justify-content-between py-8">
        <div className="col-6 d-flex align-items-center">
          <h1 className="me-12">Admin</h1>
          <p className="fs-6 fw-bold mb-0">
            <Icon path={mdiMagnify} size={1} className="text-success me-2" />
            Add New Admin
          </p>
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
      <section className="px-6 py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                ID
                <Icon path={mdiArrowDown} size={1} className="text-success ms-2" />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Verified</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>

            {userData.map((item,i) => (
              <tr key={i}>
                <th scope="row">{item.ID}</th>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Verified}</td>
                <td>
                  <Icon path={mdiEye} size={1} className="text-dark me-6" />
                  <Icon path={mdiPencil} size={1} className="text-dark" />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </section>

    </>
  )
}

export default Admin