import CategoryApi from 'api/categoryApi';
import Button from 'components/common/atoms/Button';
import Text from 'components/common/atoms/Text';
import Loading from 'components/common/molecules/Loading';
import FormGroup from 'components/common/molecules/FormGroup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import firebaseClient from './../../../../service/firebase'
import ProductApi from 'api/productApi';
import { getFromLocalStorage } from 'service/utilities/localStorage';
function AddnewProduct() {
    const { handleSubmit, register, reset } = useForm();

    const [errorsState, setErrorsState] = useState({
        name: '',
        price: '',
        quantity: ''
    })
    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);


    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const dataCategories = await CategoryApi.getAll();
                setCategories(dataCategories);
                reset()
            } catch (error) {

            }
        })();
    }, [])
    const onSubmit = (data) => {
        // console.log(firebaseClient);
        setPending(true);
        ; (async () => {
            try {
                const productImage = data.image[0];
                if (productImage) {
                    console.log(productImage);
                    let storageRef = firebaseClient.storage().ref(`image-category/${productImage.name}`);
                    storageRef.put(productImage).then(() => {
                        storageRef.getDownloadURL().then(async (url) => {
                            const newData = { ...data, image: url }
                            const { user, token } = getFromLocalStorage('user');
                            const newProduct = await ProductApi.createProduct(newData, user._id, token)
                            console.log(newProduct);
                            setPending(false)
                            reset();
                        })
                    })
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }

    return (
        <>
            <div className={`${pending ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
            <div className="mt-10 sm:mt-14 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md border-b-0 border border-gray-100">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            add new product
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
                                    reg={{ ...register('name', { required: true }) }}
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
                                    type='number'
                                    name='price'
                                    id='price'
                                    label='price'
                                    require={true}
                                    error={errorsState.price}
                                    reg={{ ...register('price', { required: true }) }}
                                />
                                <Text
                                    variant='span'
                                    className='mt-2 text-red-500 text-xs font-body font-medium'
                                >
                                    {errorsState.price}
                                </Text>
                            </div>
                            <div className='mt-5'>
                                <FormGroup
                                    type='number'
                                    name='quantity'
                                    id='quantity'
                                    label='Quantity'
                                    require={true}
                                    error={errorsState.quantity}
                                    reg={{ ...register('quantity', { required: true }) }}
                                />
                                <Text
                                    variant='span'
                                    className='mt-2 text-red-500 text-xs font-body font-medium'
                                >
                                    {errorsState.quantity}
                                </Text>
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    image
                                    <span className='ml-1 text-xs text-red-500'>{require ? '*' : ''}</span>
                                </label>
                                <input
                                    {...register('image', { required: true })}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    type="file" />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    category
                                    <span className='ml-1 text-xs text-red-500'>{require ? '*' : ''}</span>
                                </label>
                                <select name="category"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register('categoryId')}
                                >
                                    {categories.map((category, index) => {
                                        return <option key={index} value={category._id}>
                                            {category.cateName}
                                        </option>
                                    })}
                                </select>
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
