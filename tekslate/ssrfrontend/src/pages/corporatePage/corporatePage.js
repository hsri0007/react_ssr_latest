import React from 'react'
import Banner from '../../components/corporatePage/Banner'
import Description from '../../components/corporatePage/description'
import Testimonials from '../../components/corporatePage/testimonials'
import CorporateClients from '../../components/corporatePage/corporateClients'
import ContactForm from '../../components/contactForm/contactForm'

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const CorporatePage = () => {
    return (
        <div>
            <Banner />
            <Description />
            <CorporateClients />
            <Testimonials />
            <ContactForm />
        </div>
    )
}

export default CorporatePage
