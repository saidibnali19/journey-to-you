import Image from 'next/image'
import Link from 'next/link'

export default function Programs() {
    return (
        <>
            <article className='programs'>
                <div className='wrapper flow'>
                    <h3 className='fs-600 ff-heading text-accent text-center'>Programs</h3>
                    <article className='flow'>
                        <article className='card | grid'>
                            <div className="grid">
                                <h4 className="fs-500 ff-heading text-accent">Educational Outreach</h4>
                                <p>Interactive workshops and programs for high schools teaching students how to use storytelling as a tool for social change. Includes guest lectures and student mentorship.</p>
                                <Link className="cta | text-primary fw-bold" href="#">
                                    Bring Us to Your School
                                </Link>
                            </div>
                            <Image src="/images/journey_to_you_program_3.webp" alt="" width={1500} height={676} />
                        </article>
                        <article className='card | grid'>
                            <div className="grid">
                                <h4 className="fs-500 ff-heading text-accent">Community Story Collection</h4>
                                <p>An open platform where grassroots organizations and individuals can submit their transformation stories. We curate and amplify these narratives through our annual &quot;Unsung Heroes&quot; feature series.</p>
                                <Link className="cta | text-primary fw-bold" href="#">
                                    Share Your Story
                                </Link>
                            </div>
                            <Image src="/images/journey_to_you_program_1.webp" alt="" width={1024} height={1536} />
                        </article>
                        <article className='card | grid'>
                            <div className="grid">
                                <h4 className="fs-500 ff-heading text-accent">Changemaker Magazine</h4>
                                <p>A quarterly publication featuring in-depth profiles of transformational leaders, analysis of social movements, and practical insights for aspiring changemakers. Available in both digital and print formats.</p>
                                <Link className="cta | text-primary fw-bold" href="#">
                                    Read Latest Issue
                                </Link>
                            </div>
                            <Image src="/images/journey_to_you_program_2.webp" alt="" width={1024} height={1536} />
                        </article>
                    </article>
                </div>
            </article>
        </>
    )
}
