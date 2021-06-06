import CategoryApi from 'api/categoryApi';
import Button from 'components/common/atoms/Button';
import Text from 'components/common/atoms/Text';
import Loading from 'components/common/molecules/Loading';
import FormGroup from 'components/website/molecules/FormGroup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

function AddnewProduct() {
    const { handleSubmit, register, reset } = useForm();

    const [errorsState, setErrorsState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);


    const [catogories, setCatogories] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const dataCategories = await CategoryApi.getAll();
                setCatogories(dataCategories);
            } catch (error) {

            }
        })();
    }, [])
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (

        <>
            <div className={`${pending ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
            <div className="mt-10 sm:mt-14 mx-auto">
                <Text className={`${success ? 'block' : 'hidden'} px-2 py-1 mb-2 rounded-sm bg-green-400 bg-opacity-80 font-medium text-xs`}>
                    ban dang dang ky thanh cong
                    <Text variant='span' className='underline'>
                        <Link to='/buyer/login'> dawng nhap</Link>
                    </Text>
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md border-b-0 border border-gray-100">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <select name="category" id="category" {...register('category')}>
                                {catogories.map(category => {
                                    return <option value={category.cateName}>{category.cateName}</option>
                                })}
                            </select>
                        </div>
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
                    </div>
                </form>

            </div>
        </>

    )
}

export default AddnewProduct
