import Link from 'next/link'

const Links = () => {

    const links = [
        {
            title: 'Accueil',
            link: '/',
        },
        {
            title: 'Nos prestations',
            link: '/services',
        },
        {
            title: 'Blog',
            link: '/blog',
        },
        {
            title: 'Nos Valeurs',
            link: '/values',
        },
        {
            title: 'A propos',
            link: '/about',
        },
        {
            title: 'Contact',
            link: '/contact',
        },
    ]

    return (
        <div>
            {
                links.map((link => (
                    <Link key={link.title} href={link.link}>
                        {link.title}
                    </Link>
                )))
            }
        </div>
    )
}

export default Links