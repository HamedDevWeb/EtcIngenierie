import Link from 'next/link.js'
import React from 'react'

const NavLink = ({item}) => {
  return (
    <Link href={item.link} >{item.title}</Link>
  )
}

export default NavLink