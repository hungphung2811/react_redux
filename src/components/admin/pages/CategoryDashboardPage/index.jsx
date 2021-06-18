import { deleteCategory, getCategories } from 'actions/categoriesActions';
import CategoryApi from 'api/categoryApi';
import TdTable from 'components/admin/atoms/TdTable';
import ThTable from 'components/admin/atoms/ThTable';
import RowTable from 'components/admin/molecules/RowTable';
import Loading from 'components/common/molecules/Loading';
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFromLocalStorage } from 'service/utilities/localStorage';

function CategoryDashboardPage() {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        ; (async () => {
            try {
                // const dataProducts = await ProductApi.getAll();
                const dataCategories = await CategoryApi.getItemsByOption({ _limit: 10, _sort: 'createdAt', _order: 'desc' });
                dispatch(getCategories(dataCategories))
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch])


    const handleDeleteCategory = (id) => {
        const userConfirm = window.confirm('bạn có muốn xóa ')
        if (userConfirm) {
            try {
                ; (async () => {
                    const { user, token } = getFromLocalStorage('user');
                    await CategoryApi.delete(id, user._id, token);
                    dispatch(deleteCategory(id));
                })();
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <div className={`${category.loading ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
            <div>
                <div className="bg-gray-200 py-3">
                    <div className="px-4 mr-auto flex justify-end mb-1.5">
                        <Link
                            to='/admin/category/addnew'
                            className='px-3 py-1 text-[15px] rounded-[5px] text-white font-body font-medium bg-green-700 hover:bg-green-600'
                        >
                            Add new
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto">
                            <div className="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="list-products">
                                    <table className='table border-collapse bg-white'>
                                        <thead>
                                            <tr>
                                                <ThTable>#</ThTable>
                                                <ThTable>name</ThTable>
                                                <ThTable>image</ThTable>
                                                <ThTable>createdAt</ThTable>
                                                <ThTable>updatedAt</ThTable>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                category.listCategories.map((category, index) => {
                                                    return <RowTable key={index}>

                                                        <TdTable>{index + 1}</TdTable>
                                                        <TdTable>{category.cateName}</TdTable>
                                                        <TdTable>
                                                            <img width='100' src={category.image} alt="" />
                                                        </TdTable>
                                                        <TdTable>{category.createdAt}</TdTable>
                                                        <TdTable>{category.updatedAt}</TdTable>
                                                        <TdTable>
                                                            <Link to={`/admin/category/edit/${category._id}`}>
                                                                <FiEdit className='text-green-500 text-[20px]' />
                                                            </Link>
                                                        </TdTable>
                                                        <TdTable>
                                                            <FaTimes
                                                                onClick={() => { handleDeleteCategory(category._id) }}
                                                                className='text-red-500 text-[20px]' />
                                                        </TdTable>
                                                    </RowTable>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryDashboardPage
