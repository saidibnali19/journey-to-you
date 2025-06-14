import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <article>
                <h1>Journey to you</h1>
                <p>Where powerful stories meet actionable change. We amplify the voices of leaders making a difference globally, giving you the tools and inspiration to create your own impact.</p>
                <Link href="/blog">Get Involved</Link>
                <Image src="/images/journey_to_you_hero_image.webp" alt="" width={1500} height={676} />
            </article>
        </>
    )
}
