import Image from "next/image";

export default function AboutHero() {
    return (
        <>
            <article>
                <h1>About Us</h1>
                <p>Where powerful stories meet actionable change. We amplify the voices of leaders making a difference globally, giving you the tools and inspiration to create your own impact.</p>
                <Image src="/images/journey_to_you_hero_image.webp" alt="Journey to You Hero Image" width={1500} height={676} />
            </article>
        </>
    )
}
