import styles from './links.module.css'
import NavLink from './navLink/navLink'
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
        <div className="flex items-center gap-8 uppercase text-primary">
            {
                links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))
            }
        </div>
    )
}

export default Links