import Image from 'next/image';

export default function BlogArticle() {
    return (
        <>
            <article className='grid card'>
                <Image src="/images/journey_to_you_blog_1.webp" alt="" width={3072} height={2160} />
                <div className='flow'>
                    <h6 className='fs-500 text-accent ff-heading'>
                        <span className='d-block'>Inner Fortification</span>
                        Building the Core Before the Call
                    </h6>
                    <div className='flex'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" id="user">
                                <path fill="#5F5F5F" fillRule="evenodd" d="M16 3C12.6863 3 10 5.68629 10 9 10 12.3137 12.6863 15 16 15 19.3137 15 22 12.3137 22 9 22 5.68629 19.3137 3 16 3zM12 9C12 6.79086 13.7909 5 16 5 18.2091 5 20 6.79086 20 9 20 11.2091 18.2091 13 16 13 13.7909 13 12 11.2091 12 9zM16 16C11.3964 16 8.55024 17.432 6.88425 19.4829 5.25081 21.4936 4.89906 23.9225 4.89418 25.6472 4.88831 27.7194 6.68961 29 8.49209 29H23.5079C25.3104 29 27.1117 27.7194 27.1058 25.6472 27.1009 23.9225 26.7492 21.4936 25.1158 19.4829 23.4498 17.432 20.6036 16 16 16zM6.89417 25.6528C6.89843 24.1465 7.21281 22.2504 8.4366 20.7439 9.62785 19.2775 11.83 18 16 18 20.17 18 22.3722 19.2775 23.5634 20.7439 24.7872 22.2504 25.1016 24.1465 25.1058 25.6528 25.1078 26.3582 24.4829 27 23.5079 27H8.49209C7.51708 27 6.89217 26.3582 6.89417 25.6528z" clipRule="evenodd"></path>
                            </svg>
                            <p>Leigh Silako</p>
                        </div>
                        <p>02/06/2025</p>
                    </div>
                </div>
            </article>
        </>
    )
}
