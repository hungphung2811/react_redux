import AuthApi from 'api/authApi';
import Loading from 'components/common/molecules/Loading';
import Button from 'components/website/atoms/Button';
import Text from 'components/website/atoms/Text';
import FormGroup from 'components/website/molecules/FormGroup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
            email: '',
            password: '',
            [key]: value
        }
    }
    const onhandleSubmit = (data, e) => {
        setPending(true);
        (async () => {
            try {
                const newUser = await AuthApi.signIn(data);
                setErrorsState(() => {
                    return changeState('', '');
                })
                console.log(newUser);
                setPending(false);
                setSuccess(true)
                reset();
            } catch (error) {
                setPending(false);
                setSuccess(false)
                console.log(error.response.data);
                // return
                const { errorEmail, errorPassword } = error.response.data;
                if (errorEmail) {
                    setErrorsState(() => {
                        return changeState('email', errorEmail);
                    })
                } else if (errorPassword) {
                    setErrorsState(()=>{
                        return changeState('password', errorPassword);
                    })
                }
            }
        })();
    }

    return (
        <>
            <div className="mt-10 sm:mt-14 mx-auto w-[600px]">
                <Text className={`${success ? 'block' : 'hidden'} px-2 py-1 mb-2 rounded-sm bg-green-400 bg-opacity-80 font-medium text-xs`}>
                    đăng nhập thành công
                </Text>

                <div className='shadow overflow-hidden sm:rounded-md border-b-0 border border-gray-100 px-4 py-5 bg-white sm:p-6'>
                    <div>
                        <Text className='text-2xl mb-5'>
                            Đăng nhập
                        </Text>
                    </div>
                    <form onSubmit={handleSubmit(onhandleSubmit)}>
                        <div className="">
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
                                Register
                                </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${pending ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
        </>
    )
}

export default Register
