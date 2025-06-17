import Link from "next/link";

export default function Hero() {
    return (
        <>
            <article className="hero | text-primary grid">
                <div className="wrapper flow">
                    <h1 className="fs-900 ff-heading capitalise">Journey to you</h1>
                    <p className="fs-400">Where powerful stories meet actionable change. We amplify the voices of leaders making a difference globally, giving you the tools and inspiration to create your own impact.</p>
                    <Link className="cta | text-primary bg-accent fw-bold" href="/blog">Get Involved</Link>
                </div>
            </article>
        </>
    )
}
