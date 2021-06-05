import Text from 'components/common/atoms/Text'
import React from 'react'

function Footer() {
    return (
        <footer className='px-[160px] bg-gray-100'>
            <div className='py-[110px] grid grid-cols-4 gap-[50px] font-body '>
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        PAYMENT METHOD
                </Text>
                    <Text
                        className='text-[12px] mt-2 font-medium text-gray-700'
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                </Text>
                </div>
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        top rated
                    </Text>
                </div>
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        shopping guide
                    </Text>
                </div>
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        company
                    </Text>
                </div>
            </div>
            <div className='h-20 bg-yellow-300'>

            </div>
        </footer>


    )
}

export default Footer
