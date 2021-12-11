import React from 'react'
import Banner from '../../components/contactPage/banner'
import Contact from '../../components/contactPage/Contact'

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const ContactPage = () => {
    return (
        <div>
            <Banner />
            <Contact />
        </div>
    )
}

export default ContactPage
