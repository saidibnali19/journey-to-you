import Image from "next/image";

export default function Blog() {
    return (
        <>
            <article>
                <h5>Blog</h5>
                <p>Featured Blog Posts</p>
                <article>
                    <article>
                        {/* <Image src="/images/blog1.jpg" alt="Blog Post 1" width={300} height={200} /> */}
                        <h6>Blog Post 1</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <Image src="/images/blog1.jpg" alt="Blog Post 1" width={300} height={200} /> */}
                        <p>Journey to you</p>
                        <p>06/06/2025</p>
                    </article>
                    <article>
                        {/* <Image src="/images/blog1.jpg" alt="Blog Post 1" width={300} height={200} /> */}
                        <h6>Blog Post 2</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <Image src="/images/blog1.jpg" alt="Blog Post 1" width={300} height={200} /> */}
                        <p>Journey to you</p>
                        <p>06/06/2025</p>
                    </article>
                    <article>
                        {/* <Image src="/images/blog1.jpg" alt="Blog Post 1" width={300} height={200} /> */}
                        <h6>Blog Post 3</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <Image src="/images/blog1.jpg" alt="Blog Post 1" width={300} height={200} /> */}
                        <p>Journey to you</p>
                        <p>06/06/2025</p>
                    </article>
                </article>
            </article>
        </>
    )
}
