import Button from 'components/common/atoms/Button'
import Text from 'components/common/atoms/Text'
import React from 'react'

function SectionInfo() {
    return (
        <>
            <Button
                variant='btn-tag'
                color='text-white'
                dark
                twCustom={true}
                classname='mb-8 font-semibold text-[15px] hover:bg-yellow-700 transition-colors'
            >
                New colection
            </Button>

            <Text
                variant='h2'
                className={'mb-5 text-[2.5rem] font-semibold text-gray-900 text-left'}
            >
                Fill your home with uniqueness
            </Text>

            <Text
                className={'text-[1rem] font-body font-semibold text-gray-600 text-left'}
            >
                Huge variety with modern glamour!
            </Text>
        </>
    )
}

export default SectionInfo
