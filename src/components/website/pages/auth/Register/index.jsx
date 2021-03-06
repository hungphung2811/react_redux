import AuthApi from 'api/authApi';
import Button from 'components/common/atoms/Button';
import Text from 'components/common/atoms/Text';
import FormGroup from 'components/common/molecules/FormGroup';
import Loading from 'components/common/molecules/Loading';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Register() {
    const { register, handleSubmit, } = useForm();

    const [errorsState, setErrorsState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);

    const changeState = (key, value) => {
        return {
            ...errorsState,
            name: '',
            email: '',
            password: '',
            [key]: value
        }
    }
    const onhandleSubmit = (data, e) => {
        setPending(true);
        (async () => {
            try {
                await AuthApi.signUp(data);
                setErrorsState(() => {
                    return changeState('', '');
                })
                setPending(false);
                setSuccess(true)
                e.target.reset();
            } catch (error) {
                setPending(false);
                const { errorName, errorEmail, errorPassword } = error.response.data.error;
                if (errorName) {
                    setErrorsState(() => {
                        return changeState('name', errorName);
                    })
                } else if (errorEmail) {
                    setErrorsState(() => {
                        return changeState('email', errorEmail);
                    })
                } else if (errorPassword) {
                    setErrorsState(() => {
                        return changeState('password', errorPassword);
                    })
                }
            }
        })();
    }

    return (

        <>
            <div className="mt-10 sm:mt-14 mx-auto w-[600px]">
                <Text className={`${success ? 'block' : 'hidden'} px-2 py-1 mb-2 rounded-sm bg-green-400 bg-opacity-80 text-gray-700 font-medium text-xs`}>
                    Register successfull
                    <span className='underline'>
                        <Link to='/auth/login' className='ml-2 text-blue-600 font-medium'>Login</Link>
                    </span>
                </Text>

                <div className=" pb-3 shadow overflow-hidden sm:rounded-md border-b-0 border border-gray-100">
                    <div className='px-5 mt-3'>
                        <Text className='text-2xl'>
                            Register
                        </Text>
                    </div>
                    <form onSubmit={handleSubmit(onhandleSubmit)}>
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div>
                                <FormGroup
                                    type='text'
                                    name='name'
                                    id='name'
                                    label='Name'
                                    require={true}
                                    error={errorsState.name}
                                    reg={{ ...register('name') }}
                                />
                                <Text
                                    variant='span'
                                    className='mt-2 text-red-500 text-xs font-body font-medium'
                                >
                                    {errorsState.name}
                                </Text>
                            </div>
                            <div className='mt-5'>
                                <FormGroup
                                    type='email'
                                    name='email'
                                    id='email'
                                    label='Email'
                                    require={true}
                                    error={errorsState.email}
                                    reg={{ ...register('email') }}
                                />
                                <Text
                                    variant='span'
                                    className='mt-2 text-red-500 text-xs font-body font-medium'
                                >
                                    {errorsState.email}
                                </Text>
                            </div>
                            <div className='mt-5'>
                                <FormGroup
                                    type='password'
                                    name='password'
                                    id='password'
                                    label='Password'
                                    require={true}
                                    error={errorsState.password}
                                    reg={{ ...register('password') }}
                                />
                                <Text
                                    variant='span'
                                    className='mt-2 text-red-500 text-xs font-body font-medium'
                                >
                                    {errorsState.password}
                                </Text>
                            </div>
                        </div>
                        <div className="px-4 py-3 text-center sm:px-6">
                            <Button
                                variant='btn-tag'
                                size='medium'
                                color='text-white'
                                bg='bg-indigo-600'
                                twCustom={true}
                                classname='shadow-sm text-sm font-medium rounded-sm hover:bg-yellow-700 transition-colors'
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                    <div className='mt-3 text-center'>
                        <Text className='text-[15px]'>
                            or Login . <Link className='text-blue-600 font-medium' to='/auth/login'>Login your account</Link>
                        </Text>
                    </div>
                </div>

            </div>
            <div className={`${pending ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
        </>


    )
}

export default Register
