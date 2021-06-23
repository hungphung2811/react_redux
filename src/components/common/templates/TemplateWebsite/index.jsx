import Footer from 'components/website/organisms/Footer'
import Header from 'components/website/organisms/Header'
import { useEffect } from 'react'
import { useParams } from 'react-router'

function TemplateWebsite({ children }) {
    const param = useParams()
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [param])
    return (
        <>
            <div className={`shadow-sm px-16 sticky top-0 z-50 bg-white`}>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default TemplateWebsite
