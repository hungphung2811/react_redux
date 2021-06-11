import CategoryApi from 'api/categoryApi';
import Button from 'components/common/atoms/Button';
import FormGroup from 'components/common/molecules/FormGroup';
import Loading from 'components/common/molecules/Loading';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getFromLocalStorage } from 'service/utilities/localStorage';
import firebaseClient from './../../../../service/firebase';
function AddnewCategory() {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();

    const [pending, setPending] = useState(false);

    const onSubmit = (data) => {
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
                            const newCategory = await CategoryApi.create(newData, user._id, token)
                            console.log(newCategory);
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
                            add new category
                        </div>
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div>
                                <FormGroup
                                    type='text'
                                    name='cateName'
                                    id='name'
                                    label='cateName'
                                    require={true}
                                    error={errors.cateName}
                                    reg={{ ...register('cateName', { required: true }) }}
                                />
                                {errors.cateName && <p
                                    className='text-xs font-medium text-red-500'>
                                    Vui lòng nhập trường này
                                </p>}
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
                                {errors.image && <p
                                    className='text-xs font-medium text-red-500'>
                                    Vui lòng nhập trường này
                                </p>}
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
                                Save
                                </Button>
                        </div>
                    </div>
                </form>

            </div>
        </>

    )
}

export default AddnewCategory
