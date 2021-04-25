import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../styles.css";
import userService from "../../services/user-service";

const AdminContentRow = (
    {
    user,
    userName,
    role
    }) => {

    const [editing, setEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(userName)
    const [newRole, setNewRole] = useState(role)

    const saveUserInfo = () => {
        setEditing(false)
        const newUser = {
            ...user,
            userName: newUserName,
            role: newRole
        }
        userService.updateUser(newUser.userId, newUser)
    }
    
    const deleteUserFromDB = () => {
        setEditing(false)
        userService.deleteUser(user.userId)
    }

    return(
        <tr>
        <td>
            {
                !editing &&
                <Link to={`/profile/${user.userId}`}>
                    <i className="fa fa-user fa-lg wbdv-icon-padding"></i>
                    <span className="color-black">
                        {user.userName}
                    </span>
                </Link>
                
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewUserName(event.target.value)}
                    value={newUserName}
                    className="form-control"/>

            }

            
        </td>
        <td className="d-sm-table-cell d-none">
            { !editing &&
            <span className="color-black">
                            {user.role}
            </span>         
             }   
            {
                editing &&
                <input
                    onChange={(event) => setNewRole(event.target.value)}
                    value={newRole}
                    className="form-control"/>

            }
            
        </td>
        <td>
        <span className="color-black">
                    {user.emailAddress}
        </span>  
        </td>
 
        <td>
            <span className="float-right">
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-lg wbdv-icon-padding color-blue"></i>}
                {editing && <i onClick={() => saveUserInfo()} className="fas fa-check text-success fa-lg wbdv-icon-padding"></i>}
                {editing && <i onClick={() => deleteUserFromDB()} className="fas fa-times text-danger fa-lg wbdv-icon-padding"></i>}
            </span>
        </td>
      </tr>
    )
}

export default AdminContentRow