import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <>
            <header>
                <Link href="/" className="logo">
                    <Image
                        src="/images/journey_to_you_logo.webp"
                        alt="Journey to you logo"
                        width={500}
                        height={500} />
                </Link>
                <Navigation />
            </header>
        </>
    )
}
