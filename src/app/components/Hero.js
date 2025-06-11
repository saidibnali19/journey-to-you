import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <article>
                <h1>Title</h1>
                <p>Subtitle</p>
                <Link href="/blog">CTA</Link>
                {/* <Image src="" alt="" width={} height={} /> */}
            </article>
        </>
    )
}
