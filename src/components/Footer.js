import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer>
                <article>
                    <Image src="/images/journey_to_you_logo.svg" alt="" width={194} height={164} />
                    <p>Where powerful stories meet actionable change. We amplify the voices of leaders making a difference globally, giving you the tools and inspiration to create your own impact.</p>
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
                            <Link href="/resources">Resources</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <article>
                    <p>We are social</p>
                    <ul>
                        <li>
                            <Link href="https://www.instagram.com/journytoyou?igsh=cGFiczdvdnpoZm4x&utm_source=qr" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="instagram">
                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z"></path>
                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M15 12C15 13.6569 13.6569 15 12 15 10.3431 15 9 13.6569 9 12 9 10.3431 10.3431 9 12 9 13.6569 9 15 10.3431 15 12zM18 7C18 7.55228 17.5523 8 17 8 16.4477 8 16 7.55228 16 7 16 6.44772 16.4477 6 17 6 17.5523 6 18 6.44772 18 7z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://linkedin.com/in/leigh-silako-823427220" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6z" />
                                    <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6z" />
                                    <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6zm20.9 1h-4.9c-.3 0-.5-.2-.5-.5v-5.8c0-1.2-.3-2.6-1.9-2.6-1.1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.3c0 .3-.2.5-.5.5H8.5c-.1 0-.3-.1-.4-.1S8 22.1 8 22V8.4c0-.1 0-.3.1-.4.1 0 .2-.1.4-.1h4.8c.3 0 .5.2.5.5V9c.8-.7 2.1-1.3 3.8-1.3 3.7 0 5.9 2.6 5.9 6.7V22c0 .3-.2.5-.5.5zm-4.4-1h3.9v-7.1c0-3.5-1.8-5.7-4.9-5.7-2.3 0-3.6 1.2-3.8 1.9-.1.2-.3.4-.6.3-.2 0-.4-.2-.4-.5V8.9H9v12.6h3.8v-5.8c0-.4 0-.8.1-1.2.5-1.3 1.5-2 2.8-2 1.8 0 2.9 1.3 2.9 3.6v5.4z" />
                                    <path d="M23 22.5h-4.9c-.3 0-.5-.2-.5-.5v-5.8c0-1.2-.3-2.6-1.9-2.6-1.1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.3c0 .3-.2.5-.5.5H8.5c-.1 0-.3-.1-.4-.1S8 22.1 8 22V8.4c0-.1 0-.3.1-.4.1 0 .2-.1.4-.1h4.8c.3 0 .5.2.5.5V9c.8-.7 2.1-1.3 3.8-1.3 3.7 0 5.9 2.6 5.9 6.7V22c0 .3-.2.5-.5.5zm-4.4-1h3.9v-7.1c0-3.5-1.8-5.7-4.9-5.7-2.3 0-3.6 1.2-3.8 1.9-.1.2-.3.4-.6.3-.2 0-.4-.2-.4-.5V8.9H9v12.6h3.8v-5.8c0-.4 0-.8.1-1.2.5-1.3 1.5-2 2.8-2 1.8 0 2.9 1.3 2.9 3.6v5.4zM3.6 7.2C1.8 7.2.5 6 .5 4.4c0-1.7 1.3-2.9 3.1-2.9s3 1.2 3.1 2.8c0 1.7-1.3 2.9-3.1 2.9zm0-4.7c-1.3 0-2.1.7-2.1 1.9 0 1.1.8 1.9 2.1 1.9s2.1-.7 2.1-1.9-.8-1.9-2.1-1.9z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://anchor.fm/leigh-silako" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="7.5" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M3.761 10.283c2.099-.489 5.442-.469 7.5.978M3.435 8c3.689-.754 6.506-.345 8.804 1.304m-9.13-3.587c3.057-1.08 7.378-.876 10.109.978" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </article>
            </footer>
        </>
    )
}
