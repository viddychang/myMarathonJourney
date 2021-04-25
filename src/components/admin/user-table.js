import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import AdminContentRow from './user-row';
import userService from '../../services/user-service'
import '../styles.css'

const AdminContentTable = () => {
    const [results, setResults] = useState()

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        userService.getAllUsers()
        .then((response) => 
        {
            setResults(response)
            console.log(response)
            console.log(results)

        })
        .then(
            console.log(results)
        )
    }


    return(
        <div className="wbdv-padding-60 ">
          <h3>User Administration</h3>
        <table className="table">
          <thead>
            <tr>
              <th>
                User Name
              </th>
              <th className="d-sm-table-cell d-none">
                Role
              </th>
              <th className="d-sm-none d-md-none d-lg-table-cell d-none">
                Email Address
              </th>
              <th className="wbdv-padding-right">
                <span className="float-right">
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            
          {
            
            results && results.map((user) => {
                return(
              <AdminContentRow
                key={user}
                user={user}
                userName={user.userName}
                role={user.role}
              />)
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
export default AdminContentTable
