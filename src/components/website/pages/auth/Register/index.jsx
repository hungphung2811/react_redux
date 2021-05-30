import AuthApi from 'api/authApi';
import FormInput from 'components/website/atoms/FormInput';
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
        return;
        (async () => {
            try {
                const newUser = await AuthApi.signUp(data);
                setErrorsState({
                    name: '',
                    email: '',
                    password: ''
                })
                setSuccess(true)
                e.target.reset();
            } catch (error) {
                console.log(error.response.data.error);
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
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">name</label>
                                        {/* <input
                                            type="text" name="name" id="name" autoComplete="given-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            // {...register('name')}
                                            ref={register('name')}
                                        /> */}
                                        <FormInput reg={{...register('name')}}/>
                                        {errorsState.name}
                                    </div>
                                    <div className='mt-5'>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                        <input type="text" name="email" id="email"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('email')}
                                        />
                                        {errorsState.email}
                                    </div>
                                    <div className='mt-5'>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">password</label>
                                        <input type="text" name="password" id="password"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('password')}
                                        />
                                        {errorsState.password}
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register
