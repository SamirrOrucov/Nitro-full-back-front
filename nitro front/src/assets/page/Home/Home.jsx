import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactUs from '../../components/ContactUs/ContactUs'
import OurServices from '../../components/OurServicesSection/OurServices'

function Home() {
    

  return (
    <>
       <Helmet>
        <title>Home| New Era!</title>
        <link rel="canonical" href="http://localhost:5173/" />
      </Helmet>
       <div>
       <OurServices/>
        <ContactUs/>
       </div>
    </>
  )
}

export default Home