import Link from 'next/link.js'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>Cette page n'existe pas</h2>
            <Link href="/">
                <h3>Retourner sur la page d'accueil</h3>
            </Link>
        </div>
    )
}

export default NotFound