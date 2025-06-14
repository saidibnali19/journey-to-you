import Image from 'next/image'
import Link from 'next/link'

export default function Programs() {
    return (
        <>
            <article>
                <h3>Programs</h3>
                <article>
                    <article>
                        <h4>Educational Outreach</h4>
                        <p>Interactive workshops and programs for high schools teaching students how to use storytelling as a tool for social change. Includes guest lectures and student mentorship.</p>
                        <Link href="#">
                            Bring Us to Your School
                        </Link>
                        <Image src="/images/journey_to_you_program_3.webp" alt="" width={1500} height={676} />
                    </article>
                    <article>
                        <h4>Community Story Collection</h4>
                        <p>An open platform where grassroots organizations and individuals can submit their transformation stories. We curate and amplify these narratives through our annual "Unsung Heroes" feature series.</p>
                        <Link href="#">
                            Share Your Story
                        </Link>
                        <Image src="/images/journey_to_you_program_1.webp" alt="" width={1024} height={1536} />
                    </article>
                    <article>
                        <h4>Changemaker Magazine</h4>
                        <p>A quarterly publication featuring in-depth profiles of transformational leaders, analysis of social movements, and practical insights for aspiring changemakers. Available in both digital and print formats.</p>
                        <Link href="#">
                            Read Latest Issue
                        </Link>
                        <Image src="/images/journey_to_you_program_2.webp" alt="" width={1024} height={1536} />
                    </article>
                </article>
            </article>
        </>
    )
}
