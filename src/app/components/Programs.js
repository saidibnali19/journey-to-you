import Image from 'next/image'
import Link from 'next/link'

export default function Programs() {
    return (
        <>
            <article>
                <h3>Programs</h3>
                <article>
                    <article>
                        <h4>Program 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link href="/programs/program1">
                            <button>Learn More</button>
                        </Link>
                        {/* <Image src="" alt="" width={} height={} /> */}
                    </article>
                    <article>
                        <h4>Program 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link href="/programs/program2">
                            <button>Learn More</button>
                        </Link>
                        {/* <Image src="" alt="" width={} height={} /> */}
                    </article>
                    <article>
                        <h4>Program 3</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link href="/programs/program3">
                            <button>Learn More</button>
                        </Link>
                        {/* <Image src="" alt="" width={} height={} /> */}
                    </article>
                </article>
            </article>
        </>
    )
}
