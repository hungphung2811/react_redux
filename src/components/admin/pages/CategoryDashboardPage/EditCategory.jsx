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
import { useParams } from 'react-router';
function EditCategory() {
    const { id } = useParams()
    const [category, setCategories] = useState(null)
    const [pending, setPending] = useState(false);

    useEffect(() => {
        ; (async () => {
            try {
                const dataCategory = await CategoryApi.getOne(id)
                setCategories(dataCategory)
                reset({ ...dataCategory, image: null, tempImage: dataCategory.image })
            } catch (error) {

            }
        })();
    }, [])

    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        defaultValues: {
            ...category
        }
    });

    const onSubmit = (data) => {
        setPending(true);
        ; (async () => {
            try {
                const { user, token } = getFromLocalStorage('user');
                if (data.image) {
                    const productImage = data.image[0];
                    let storageRef = firebaseClient.storage().ref(`image-category/${productImage.name}`);
                    storageRef.put(productImage).then(() => {
                        storageRef.getDownloadURL().then(async (url) => {
                            const newData = { ...data, image: url, tempImage: null }
                            const newCategory = await CategoryApi.updateProduct(id, newData, user._id, token)
                            setCategories(newCategory);
                            setPending(false)
                            reset({ ...newCategory, image: null, tempImage: newCategory.image });
                        })
                    })
                } else {
                    const newData = { ...data, image: data.tempImage, tempImage: null }
                    // console.log({data,newData});
                    const newCategory = await CategoryApi.updateProduct(id, newData, user._id, token)
                    setCategories(newCategory);
                    setPending(false);
                    reset({ ...newCategory, image: null, tempImage: newCategory.image });
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
                            edit category
                        </div>
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div>
                                <FormGroup
                                    type='text'
                                    name='name'
                                    id='name'
                                    label='Name'
                                    require={true}
                                    error={errors.cateName}
                                    reg={{ ...register('cateName') }}
                                />
                                <Text
                                    variant='span'
                                    className='mt-2 text-red-500 text-xs font-body font-medium'
                                >
                                    {errors.cateName}
                                </Text>
                                {errors.cateName && <p
                                    className='text-xs font-medium text-red-500'>
                                    Vui lòng nhập trường này
                                    </p>}
                            </div>
                            <div>
                                <input type="hidden"  {...register('tempImage')} />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    image
                                    <span className='ml-1 text-xs text-red-500'> *</span>
                                </label>
                                <input
                                    {...register('image')}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    type="file" />
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
                                Edit
                                </Button>
                        </div>

                    </div>
                </form>

            </div>
        </>

    )
}

export default EditCategory
