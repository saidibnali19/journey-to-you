import Image from 'next/image';

export default function Testimonials() {
    return (
        <>
            <article>
                <h6>Testimonials</h6>
                <p>What other people say about us</p>
                <article>
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.</p>
                        {/* <Image src="/images/testimonial1.jpg" alt="Testimonial 1" width={100} height={100} /> */}
                        <h6>John Doe</h6>
                    </article>
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.</p>
                        {/* <Image src="/images/testimonial1.jpg" alt="Testimonial 1" width={100} height={100} /> */}
                        <h6>John Doe</h6>
                    </article>
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.</p>
                        {/* <Image src="/images/testimonial1.jpg" alt="Testimonial 1" width={100} height={100} /> */}
                        <h6>John Doe</h6>
                    </article>
                </article>
            </article>
        </>
    )
}
