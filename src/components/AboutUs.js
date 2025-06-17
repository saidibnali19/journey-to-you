import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <article className="about-us wrapper flow">
                <h2 className="fs-600 ff-heading text-accent text-center">About Us</h2>
                <p className="text-center">The world needs more stories that inspire action. And we’re here to tell them</p>
                <article className="grid">
                    <article className="card | flow">
                        <Image src="/images/mission.svg" alt="" width={512} height={512} />
                        <h3 className="fs-500 ff-heading text-accent text-center">Our Mission</h3>
                        <p>To document and share the journeys of change-makers worldwide, offering valuable insights, practical strategies and deep inspiration through digital content</p>
                    </article>
                    <article className="card | flow">
                        <Image src="/images/vision.svg" alt="" width={512} height={512} />
                        <h3 className="fs-500 ff-heading text-accent text-center">Our Vision</h3>
                        <p>To be the leading media platform that inspires and empowers change-makers through compelling storytelling</p>
                    </article>
                </article>
            </article>
        </>
    )
}
