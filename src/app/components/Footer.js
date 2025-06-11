import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer>
                <article>
                    <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
                    <p>Subtitle</p>
                </article>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/programs">Programs</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/testimonials">Resources</Link>
                        </li>
                    </ul>
                </nav>
                <article>
                    <p>We are social</p>
                    <ul>
                        <li>
                            <Link href="https://www.facebook.com" target="_blank">Facebook</Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com" target="_blank">Twitter</Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com" target="_blank">Instagram</Link>
                        </li>
                    </ul>
                </article>
            </footer>
        </>
    )
}
