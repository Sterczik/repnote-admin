import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/">RepNote Admin</Link>
    <Link to="/users">Users</Link>
    <Link to="/trainings">Trainings</Link>
  </div>
)

export default Header