import React from 'react'
import Banner from '../../components/aboutPage/Banner'
import Description from '../../components/aboutPage/description'
import ContactForm from '../../components/contactForm/contactForm'

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const AboutPage = () => {
    return (
        <div>
            <Banner />
            <Description />
            <ContactForm />
        </div>
    )
}

export default AboutPage
