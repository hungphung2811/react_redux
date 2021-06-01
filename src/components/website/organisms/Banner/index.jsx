import ImageItem from 'components/website/atoms/ImageItem'
import SectionInfo from 'components/website/molecules/SectionInfo'
import React from 'react'

function Banner() {
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-gray-100 flex items-center justify-center'>
                <div className='px-14'>
                    <SectionInfo />
                </div>
            </div>
            <div className='animate-wiggle'>
                <ImageItem
                    url={'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/inside-weather-E5lK_COkD2E-unsplash-copy.jpg'}
                    alt={'banner'}
                />
            </div>
        </div>
    )
}

export default Banner
