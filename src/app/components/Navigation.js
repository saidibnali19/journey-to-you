"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="primary-nav | wrapper flex">
            <ul className="flex" role="list">
                <li>
                    <Link href="/" className={pathname === "/" ? "text-accent" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={pathname === "/about-us" ? "text-accent" : ""}>About Us</Link>
                </li>
                <li>
                    <Link href="/users-client" className={pathname === "/resources" ? "text-accent" : ""}>Resources</Link>

                </li>
                <li>
                    <Link href="/users-server" className={pathname === "/blog" ? "text-accent" : ""}>Blog</Link>
                </li>
                <li>
                    <Link href="/mock-users" className={pathname === "/contact-us" ? "text-accent" : ""}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}
