import Footer from 'components/website/organisms/Footer'
import Header from 'components/website/organisms/Header'

function TemplateWebsite({ children }) {
    return (
        <>
            <div className={`shadow-sm px-16 sticky top-0 bg-white`}>
                <Header />
            </div>
            <div className=''>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default TemplateWebsite
