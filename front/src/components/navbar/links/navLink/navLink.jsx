import Link from 'next/link.js'
import React from 'react'

const NavLink = ({item}) => {
  return (
    <div className="text-white bg-[#4AA95B] font-400 text-[16px] px-3 py-3 rounded-[15px]"  >
      <Link  href={item.link} >{item.title}</Link>
    </div>
    
  )
}

export default NavLink