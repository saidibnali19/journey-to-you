"use client";

import A11YSlider from "a11y-slider";
import BlogArticle from "./BlogArticle";

import { useRef, useEffect } from "react";

export default function Blog() {
    const sliderRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            instanceRef.current = new A11YSlider(sliderRef.current, {
                slidesToShow: 1,
                arrows: true, // arrows enabled 767px and down

                responsive: {
                    560: {
                        slidesToShow: 2,
                    },
                    720: {
                        // disabled: true, // disable slider at 720px and up
                    },

                }
            });
        }
    }, []);

    return (
        <>
            <article className="blog | wrapper flow">
                <h5 className="fs-600 text-accent ff-heading">Blog</h5>
                <p className="fs-500 text-accent ff-heading">Latest Blog Posts</p>
                {/* Make the articles a list with three list items */}
                <ul className="slider | flex" role="list" ref={sliderRef}>
                    <li><div className="grid">
                        <BlogArticle />
                    </div></li>
                    <li><div className="grid">
                        <BlogArticle />
                    </div></li>
                    <li><div className="grid">
                        <BlogArticle />
                    </div></li>
                </ul>
            </article>
        </>
    )
}
