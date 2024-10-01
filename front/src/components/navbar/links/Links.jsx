"use client";
import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";

const links = [
  {
    title: "Accueil",
    link: "/",
  },
  {
    title: "Nos prestations",
    link: "/services",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Nos Valeurs",
    link: "/values",
  },
  {
    title: "A propos",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='flex text-xs items-center gap-8 uppercase text-primary'>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {
        open && <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
        </div>
      }
    </div>
  );
};

export default Links;
