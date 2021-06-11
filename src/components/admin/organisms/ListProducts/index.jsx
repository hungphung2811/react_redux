import { deleteProduct } from 'actions/productActions'
import ProductApi from 'api/productApi'
import TdTable from 'components/admin/atoms/TdTable'
import ThTable from 'components/admin/atoms/ThTable'
import RowTable from 'components/admin/molecules/RowTable'
import ImageItem from 'components/common/atoms/ImageItem'
import Text from 'components/common/atoms/Text'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFromLocalStorage } from 'service/utilities/localStorage'

function ListProducts({ products }) {
    const dispatch = useDispatch()
    const handleDeleteProduct = (id) => {
        const userConfirm = window.confirm('bạn có muốn xóa ')
        if (userConfirm) {
            try {
                ; (async () => {
                    const { user, token } = getFromLocalStorage('user');
                    await ProductApi.deleteProduct(id, user._id, token);
                    dispatch(deleteProduct(id));
                })();
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <table className={`min-w-full divide-y divide-gray-200 ${products.length === 0 ? 'hidden' : ''}`}>
                <thead className="bg-gray-50">
                    <RowTable>
                        <ThTable>#</ThTable>
                        <ThTable>name</ThTable>
                        <ThTable>
                            <div> price </div>
                            <div className="text-xs text-gray-500 block capitalize">
                                sale
                            </div>
                        </ThTable>

                        <ThTable>status</ThTable>
                        <ThTable>
                            Quantity
                            <div className="text-xs text-gray-500 block capitalize">
                                Instock / Total products
                            </div>
                        </ThTable>
                        <ThTable>edit</ThTable>
                        <ThTable>delete</ThTable>
                    </RowTable>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product, index) => {
                        return <RowTable hover key={index}>
                            <TdTable>{index + 1}</TdTable>
                            <TdTable>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <ImageItem
                                            className="rounded-full"
                                            url={product.image}
                                            alt={product.name}
                                        />
                                    </div>

                                    <div className="ml-4">
                                        <Text className="text-sm font-medium text-gray-900">
                                            {product.name}
                                        </Text>
                                    </div>
                                </div>
                            </TdTable>
                            <TdTable>
                                {parseFloat(product.price).toFixed(2)}
                                <div className="text-xs block text-red-500">
                                    {parseFloat(product.sale)} %
                                </div>
                            </TdTable>
                            <TdTable>
                                <Text
                                    variant='span'
                                    className={
                                        `${product.status === true ? 'bg-green-100' : 'bg-red-200'} px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800`
                                    }>
                                    {product.status === true ? "Instock" : 'Outstock'}
                                </Text>
                            </TdTable>
                            <TdTable>
                                <Text
                                    variant='span'
                                    className="ml-3">
                                    {product.instock}/{product.quantity}
                                </Text>
                            </TdTable>
                            <TdTable>
                                <Link to={`/admin/product/edit/${product._id}`}>
                                    <FiEdit className='text-green-500 text-[20px]' />
                                </Link>
                            </TdTable>
                            <TdTable onClick={() => {
                                handleDeleteProduct(product._id)
                            }}>
                                <FaTimes className='text-red-500 text-[20px]' />
                            </TdTable>
                        </RowTable>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListProducts
