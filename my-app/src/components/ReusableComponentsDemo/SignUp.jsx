import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import formAttributes from "../reduxDemo/constants/FormFields";
import { submit } from "../reduxDemo/action/formSubmitAction"
import updateUserList from "../reduxDemo/action/updateUserList"
import clearFormAction from '../reduxDemo/action/clearFormAction';
import Form from './Reusable/Form';


export const SignUp = () => {
    const isEdit = useSelector(state => state.forms.isEdit)
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        if (!isEdit) return dispatch(submit(formAttributes))
        return dispatch(updateUserList(formAttributes))
    }
    const buttonAttributes = [
        {
            value: !isEdit ? 'Sign Up' : 'Update',
            type: 'submit',
        },
        {
            value: 'Clear',
            type: 'button',
            typeOf: 'clear',
            onClick: () => dispatch(clearFormAction()),
        }
    ]
    return (
        <Form {...{ formAttributes, handleSubmit, buttonAttributes }} />
    )
}
export default memo(SignUp);