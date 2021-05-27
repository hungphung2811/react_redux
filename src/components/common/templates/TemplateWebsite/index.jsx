import Footer from 'components/website/organisms/Footer'
import Header from 'components/website/organisms/Header'
import React from 'react'

function TemplateWebsite({ children }) {
    return (
        <>
            <div className='px-16'>
                <Header />
            </div>
            <div className='px-16'>
                {children}
            </div>
            <div className='text-center text-yellow-600'>
                <Footer/>
            </div>
        </>
    )
}

export default TemplateWebsite
