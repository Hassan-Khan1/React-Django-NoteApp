import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../../assets/add.svg'
// import {} from '..'

const AddButton = () => (
  <Link to="/notes/new" className="floating-button">
    <AddIcon />
  </Link>
)

export default AddButton