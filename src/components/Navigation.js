"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="fs-500 flex" role="list">
                <li>
                    <Link className={pathname === "/" ? "current_page fw-bold" : "fw-bold"} href="/">Home</Link>
                </li>
                <li>
                    <Link className={pathname === "/about" ? "current_page fw-bold" : "fw-bold"} href="/about">About Us</Link>
                </li>
                <li>
                    <Link className={pathname === "/resources" ? "current_page fw-bold" : "fw-bold"} href="/resources">Resources</Link>

                </li>
                <li>
                    <Link className={pathname === "/blog" ? "current_page fw-bold" : "fw-bold"} href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={pathname === "/contact" ? "current_page fw-bold" : "fw-bold"} href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}
