import Link from 'next/link.js'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>La page que vous souhaitez visiter n'existe pas</p>
        <Link href='/'>Allez sur la page d'accueil</Link>
    </div>
  )
}

export default NotFound