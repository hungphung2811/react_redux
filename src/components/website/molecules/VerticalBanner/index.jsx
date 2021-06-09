import ImageItem from 'components/common/atoms/ImageItem'
import Text from 'components/common/atoms/Text'
import React from 'react'
import { GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function VerticalBanner({ url, text, className, button, linkTo, linkLabel, ...props }) {
    return (
        <div
            {...props}
            className='relative'>
            <ImageItem
                url={url}
                alt={text}
            />
            <div className='absolute bottom-[40%] right-[30%]'>
                <div className={`${className?.customBlock} text-center`} >
                    {button}
                    <Text
                        variant='h2'
                        className='font-body font-semibold font-[35px] text-center'
                    >
                        {text}
                    </Text>
                    <Link to={linkTo}
                        className={`${className?.customText}
                            flex items-center text-center mt-[20px] font-body font-medium text-[14px]`
                        }>
                        Show more
                        <GrFormNext />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VerticalBanner
