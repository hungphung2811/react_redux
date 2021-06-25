import OrderApi from 'api/orderApi';
import ThTable from 'components/admin/atoms/ThTable'
import RowTable from 'components/admin/molecules/RowTable'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function ListOrder() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        ; (async () => {
            try {
                const dataOrder = await OrderApi.get();
                console.log(dataOrder);
                setOrders(dataOrder);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])
    return (
        <>
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                    <RowTable>
                        <ThTable>
                            #
                        </ThTable>
                        <ThTable>
                            Name
                        </ThTable>
                        <ThTable>
                            phone number
                        </ThTable>
                        <ThTable>
                            address
                        </ThTable>
                        <ThTable>
                            Edit
                        </ThTable>
                    </RowTable>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order, index) => {
                        return <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.address}
                            </td>
                            <td className="py-4 whitespace-nowrap text-center text-sm font-medium">
                                <div>
                                    <Link to={`/admin/order/edit/${order._id}`} className="mr-10 text-indigo-600 hover:text-indigo-900">
                                        <svg className="text-green-600 bi bi-pencil-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListOrder
