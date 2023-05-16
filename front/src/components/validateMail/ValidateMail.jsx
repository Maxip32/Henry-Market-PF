import React, { useState } from 'react'
import axios from 'axios'
import './Validate.css';


const initialState = {
  users: {},
  error: null,
  loading: false
}

// Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_REQUEST':
      return { ...state, loading: true }
    case 'CREATE_USER_SUCCESS':
      return { ...state, users: [...state.users, action.payload], loading: false }
    case 'CREATE_USER_FAILURE':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

// Action Creator


export const createUser = ( mail,name,surname,) => {
  return dispatch => {
    axios.get('/users/create/users', {  mail,name,surname, })
      .then(response => {
        dispatch({
          type: 'CREATE_USER_SUCCESS',
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_USER_FAILURE',
          payload: error.message
        })
      })
  }
}


// Componente del Formulario
const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    mail: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    createUser(formData.firstName, formData.lastName, formData.email)
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
         SurName:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
         Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>   
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Create User</button>
    </form>
  )
}

export default CreateUserForm
export { usersReducer }

