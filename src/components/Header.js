import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="wrapper flex">
                    <Link href="/" >
                        <Image
                            className="header_logo"
                            src="/images/journey_to_you_logo.png"
                            alt="Journey to you logo"
                            width={500}
                            height={500} />
                    </Link>
                    <button>Menu</button>
                    <Navigation />
                </div>
            </header>
        </>
    )
}
