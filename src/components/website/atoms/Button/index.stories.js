import React from 'react'
import './../../../../index.css';
import Button from './index.jsx';

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => {
    return (
        <Button
            variant='btn-tag'
            twCustom={true}
            dark
            size='small'
            primary
            color='text-white'
        >
            alo alo
        </Button>
    )
}

export const Secondary = () => <Button variant='custom'
    className={'bg-gray-500 text-white'}
>secondary</Button>