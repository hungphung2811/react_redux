import ListOrder from 'components/admin/organisms/ListOrder'
import React from 'react'

function OrderDashbordPage() {
    return (
        <>
            <div>
                <div className="bg-gray-200 py-3">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto">
                            <div className="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="listCategoriesId">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pop-up__container" className="pop-up__container">
                    <div className="pop-up overflow-auto h-auto shadow-lg rounded">
                        <div className="relative">
                            <ListOrder />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderDashbordPage
