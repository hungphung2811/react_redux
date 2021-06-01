import AuthApi from 'api/authApi';
import Loading from 'components/common/molecules/Loading';
import Button from 'components/website/atoms/Button';
import Text from 'components/website/atoms/Text';
import FormGroup from 'components/website/molecules/FormGroup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [errorsState, setErrorsState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

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
        (async () => {
            try {
                const newUser = await AuthApi.signUp(data);
                setErrorsState({
                    ...errorsState,
                    name: '',
                    email: '',
                    password: ''
                })
                setSuccess(true)
                e.target.reset();
            } catch (error) {
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
                    return changeState('password', errorPassword);
                }
            }
        })();
    }

    return (
        <>
            <div className="mt-10 sm:mt-14 mx-auto w-[500px]">
                <Text className={`${success ? 'block' : 'hidden'} px-2 py-1 mb-2 rounded-sm bg-green-400 bg-opacity-80 font-medium text-xs`}>
                    ban dang dang ky thanh cong
                            <span className='underline'>
                        <Link to='/buyer/login'> dawng nhap</Link>
                    </span>
                </Text>
                <form onSubmit={handleSubmit(onhandleSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md border-b-0 border border-gray-100">
                        <div className="px-4 py-2 bg-white sm:p-6">
                            <div>
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
                                Login
                                </Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='hidden'>
                <Loading />
            </div>
        </>
    )
}

export default Login
