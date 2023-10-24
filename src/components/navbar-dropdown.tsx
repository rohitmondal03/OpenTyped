"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"


export default function NavbarDropdown() {
  const menuRef = useRef<HTMLDivElement>(null);

  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => setNavOpen((prev) => !prev)
  const closeMenu = () => setNavOpen(false)


  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])


  return (
    <div>
      {navOpen ? (
        <X onClick={toggleMenu} />
      ) : (
        <Menu onClick={toggleMenu} />
      )}

      <div
        ref={menuRef}
        className={`${navOpen ? "opacity-100" : "opacity-0"} absolute top-16 right-3 py-2 px-5 rounded-lg transition-all duration-200 flex flex-col gap-y-2 border-2 bg-black dark:bg-white text-white dark:text-black z-10`}
      >
        <Link
          href={`/your-profile`}
          onBlur={closeMenu}
          onFocus={closeMenu}
        >
          Profile
        </Link>

        <Link
          href={`/projects`}
          onBlur={closeMenu}
          onFocus={closeMenu}
        >
          Projects
        </Link>

        <Link
          href={`/add-new-project`}
          onBlur={closeMenu}
          onFocus={closeMenu}
        >
          Add Project
        </Link>
      </div>
    </div>
  )
}