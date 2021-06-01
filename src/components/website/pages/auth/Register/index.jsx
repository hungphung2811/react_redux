import AuthApi from 'api/authApi';
import Button from 'components/website/atoms/Button';
import FormInput from 'components/website/atoms/FormInput';
import Text from 'components/website/atoms/Text';
import FormGroup from 'components/website/molecules/FormGroup';
import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [errorsState, setErrorsState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [success, setSuccess] = useState(false);

    const onhandleSubmit = (data, e) => {
        console.log(data);
        // return;  
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
                    setErrorsState({
                        ...errorsState,
                        name: errorName,
                        email: '',
                        password: ''
                    })
                } else if (errorEmail) {
                    setErrorsState({
                        ...errorsState,
                        email: errorEmail,
                        name: '',
                        password: ''
                    })
                } else if (errorPassword) {
                    setErrorsState({
                        ...errorsState,
                        password: errorPassword,
                        name: '',
                        email: ''
                    })
                }
            }
        })();
    }


    return (
        <div className="mt-10 sm:mt-0 shadow-sm">
            <div className="mx-auto px-10 w-2/3">
                <div className="mt-5 md:mt-0">
                    <div className={`${success ? 'block' : 'hidden'} px-2 py-1 mb-2 rounded-sm bg-green-400 bg-opacity-80 font-medium text-xs`}>
                        ban dang dang ky thanh cong
                        <span className='underline'>
                            <Link to='/buyer/login'> dawng nhap</Link>
                        </span>
                    </div>
                    <form onSubmit={handleSubmit(onhandleSubmit)}>
                        <div className="shadow overflow-hidden sm:rounded-md">
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
                                    classname='shadow-sm text-sm font-medium rounded-sm transition-colors'
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register
