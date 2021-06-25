import OrderApi from 'api/orderApi';
import UserApi from 'api/userApi';
import ThTable from 'components/admin/atoms/ThTable';
import RowTable from 'components/admin/molecules/RowTable';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditOrderPage() {
    const [order, setOrder] = useState({});
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        ; (async () => {
            try {
                const dataOrder = await OrderApi.getOne(id);
                const dataUser = await UserApi.getOne(dataOrder.userId);

                setOrder(dataOrder);
                setUser(dataUser);
                console.log(dataUser);
            } catch (error) {
                console.log(error.responsive);
            }
        })();
    }, [id])

    return (<>
        <div className="grid grid-cols-2 text-[15px]">
            <div>
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                        <RowTable>
                            <ThTable>
                                Name
                                <span className='block text-xs text-gray-400 lowercase'>Người nhận</span>
                            </ThTable>
                            <ThTable>
                                phone number
                            </ThTable>
                            <ThTable>
                                address
                            </ThTable>
                        </RowTable>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.address}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div>
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-blue-200">
                        <RowTable>
                            <ThTable>
                                Name
                                <span className='block text-[10px] text-gray-400 lowercase'>avatar</span>
                            </ThTable>
                            <ThTable>
                                user name
                            </ThTable>
                            <ThTable>
                                email
                            </ThTable>
                        </RowTable>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <img className='w-5 h-5' src={user.avatar} alt="" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {user.email}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )

}


export default EditOrderPage
