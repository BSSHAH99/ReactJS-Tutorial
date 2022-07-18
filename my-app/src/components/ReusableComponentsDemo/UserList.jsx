import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from './Reusable/Table'
import { editUserList } from '../reduxDemo/action/editUserListAction'
import deleteUserListByIdAction from "../reduxDemo/action/deleteUserListByIdAction"
import { objectKeys } from '../ReusableComponentsDemo/RegularExpression'

export default function UserList() {
    const userData = useSelector(state => state.user)
    const { errorMessage, showError, userList } = userData
    const key = userList.length ? objectKeys(userList[0]) : []
    console.log("this is key", key);
    const ans = []
    key.map((items) => {
        !items.includes("confirmPassword") &&
            ans.push(items)
    })
    console.log("this is ans", ans);

    const dispatch = useDispatch()

    const buttonAttributes = [
        {
            value: 'Delete',
            typeOf: 'delete',
            type: 'button',
            onClick: (id) => dispatch(deleteUserListByIdAction(id))
            // console.log("delete is caling", id),
        },
        {
            value: 'Edit',
            typeOf: 'edit',
            type: 'button',
            onClick: (id) => dispatch(editUserList(id)),
            // console.log("Edit is caling", id),
        }
    ]

    return (
        <Fragment>
            {showError && <div className="alert-danger" role="alert">
                {errorMessage}
            </div>}
            {key.length ?
                <Table theadKeyMap={key} tbodyValueMap={userList} buttonAttributes={buttonAttributes} />
                : null
            }
        </Fragment>
    )
}




