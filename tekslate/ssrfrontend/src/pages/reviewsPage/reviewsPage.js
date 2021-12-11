import React from 'react'
import Banner from '../../components/reviewsPage/Banner'
import Description from '../../components/reviewsPage/description'
import ContactForm from '../../components/contactForm/contactForm'

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const ReviewsPage = () => {
    return (
        <div>
            <Banner />
            <Description />
            <ContactForm />
        </div>
    )
}

export default ReviewsPage
