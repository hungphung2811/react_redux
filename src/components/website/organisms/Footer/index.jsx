import Text from 'components/common/atoms/Text'
import React from 'react'
import { BsLockFill } from 'react-icons/bs'
import { FaCcAmazonPay, FaCcJcb, FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='px-[160px] bg-gray-100 mt-5'>
            <div className='py-[110px] grid grid-cols-4 gap-[50px] font-body '>
                <div>
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
                    <div className='mt-2 text-[25px]'>
                        <ul className='flex'>
                            <li className='mr-2'><FaCcVisa /></li>
                            <li className='mr-2'><FaCcPaypal /></li>
                            <li className='mr-2'><FaCcAmazonPay /></li>
                            <li className='mr-2'><FaCcJcb /></li>
                        </ul>
                    </div>
                    <div className='mt-2'>
                        <Text className='flex items-center text-[12px]'>
                            <BsLockFill className='mr-2' />
                            Secure online payment
                        </Text>
                    </div>
                </div>
                
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        Top rated
                    </Text>
                    <div className='mt-3'>
                        <ul className='font-body font-medium text-[12px]'>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    FAQ
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Shipment
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Returns
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Policies
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Gift
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Clothing
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Purchase
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        shopping guide
                    </Text>
                    <div className='mt-3'>
                        <ul className='font-body font-medium text-[12px]'>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    FAQ
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Shipment
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Returns
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Policies
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Gift
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Clothing
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Purchase
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Text
                        heading='h4'
                        className='uppercase text-gray-700 font-semibold text-[14px]'
                    >
                        company
                    </Text>
                    <div className='mt-3'>
                        <ul className='font-body font-medium text-[12px]'>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    FAQ
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Shipment
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Returns
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Policies
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Gift
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Clothing
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link className='hover:text-yellow-600' to='/home'>
                                    Purchase
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >


    )
}

export default Footer
