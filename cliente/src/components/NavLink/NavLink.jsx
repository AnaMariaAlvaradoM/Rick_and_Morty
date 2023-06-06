import { NavLink as NavLinkComponente } from 'react-router-dom'
import React from 'react'
import styles from './NavLink.module.css'

function NavLink({ to, children, ...props }) {
  return (
    <NavLinkComponente
        {...props}
        to = {to}
        className={({ isActive }) => (isActive ? styles.isActive  : undefined)}
    >{children}
    </NavLinkComponente>
  )
}

export default NavLink;