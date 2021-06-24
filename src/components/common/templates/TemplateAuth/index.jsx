import Footer from 'components/website/organisms/Footer'
import Header from 'components/website/organisms/Header'
import React from 'react'

function TemplateAuth({ children }) {
    return (
        <>
            <div className={`shadow-sm px-16 sticky top-0 z-50 bg-white`}>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default TemplateAuth
