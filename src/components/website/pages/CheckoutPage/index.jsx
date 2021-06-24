import React from 'react'

function CheckoutPage() {
    return (
        <>
            <div>
                <div className="container mx-auto lg:px-32 bg-gray-100 py-3">
                    <ul>
                        <li className="inline-block">
                            <a className="underline" href="/#/">Home</a>
                            <span>&gt;</span>
                        </li>
                        <li className="inline-block mx-1.5 ">Checkout</li>
                    </ul>
                </div>
                <div className="text-center py-20 -mb-8 bg-gray-50">
                    <h4 className="font-semibold font-sans text-lg">Hiện tại chưa có sản phẩm trong giỏ hàng . hãy vào trang <a className="text-indigo-600 underline font-bold" href="/#//products">Products</a> để xem thêm</h4>
                </div>
                `
                {'}'}
                return /*html*/ `
                <div className="container mx-auto lg:px-32 bg-gray-100 py-3">
                    <ul>
                        <li className="inline-block">
                            <a className="underline" href="/#/">Home</a>
                            <span>&gt;</span>
                        </li>
                        <li className="inline-block mx-1.5 ">Checkout</li>
                    </ul>
                </div>
                <div className="container md:px-8 lg:px-16 mt-3">
                    <div className="grid grid-cols-3 gap-4 bg-gray-100">
                        <div className="col-span-2">
                            <div className="p-3">
                                <div className=" mt-2">
                                    <label className="ml-1 text-sm font-semibold" htmlFor>Name *</label>
                                    <input id="nameOrderId" type="text" className="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Name *" />
                                    <span className="flex text-xs text-red-500" id="nameOrderErrorId" />
                                </div>
                                <div className=" mt-2">
                                    <label className="ml-1 text-sm font-semibold" htmlFor>Phone Number *</label>
                                    <input id="phoneOrderId" type="text" className="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Phone *" />
                                    <span className="flex text-xs text-red-500" id="phoneOrderErrorId" />
                                </div>
                                <div className=" mt-2">
                                    <label className="ml-1 text-sm font-semibold" htmlFor>Address *</label>
                                    <textarea id="addressOrderId" className="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" rows={3} placeholder="Address *" defaultValue={""} />
                                    <span className="flex text-xs text-red-500" id="addressOrderErrorId" />
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="flex flex-col">
                                    <div className="-my-2 overflow-x-auto">
                                        <div className="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="list-products">
                                                ${'{'}await ListCheckOut.render(cart){'}'}
                                                <table className="min-w-full divide-y divide-gray-200 ">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                product
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                price
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                quantity
                                                            </th>
                                                            <th scope="col" className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                subTotal
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200 list-cart-check-out" id="listOrderId" />
                                                </table>
                                                <div className="text-xl font-semibold text-center my-5 hidden">
                                                    <span>Không có sản phẩm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 py-3 pr-3 mt-8">
                            <div className="bg-white shadow p-3 mt-1">
                                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                                    <span className="font-semibold text-sm"> ${'{'}quantity{'}'}  Product</span>
                                    <span className="font-semibold text-sm uppercase">$ ${'{'}total.toFixed(2){'}'}</span>
                                </div>
                                <div className="mt-3 flex justify-between items-center border-b border-gray-300 pb-3">
                                    <span className="font-semibold text-sm">Shipping</span>
                                    <span className="font-semibold text-sm uppercase">$ 45.00</span>
                                </div>
                                <div className="mt-3 flex justify-between items-center border-b border-gray-300 pb-3">
                                    <span className="font-semibold text-sm">Total</span>
                                    <span className="font-semibold text-sm uppercase">$${'{'}(total + 45.00).toFixed(2){'}'}</span>
                                </div>
                                <div className="mt-3 text-center">
                                    <button id="btnCheckoutId" className="uppercase px-5 py-2 text-sm text-white font-semibold bg-black hover:bg-yellow-600">checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CheckoutPage
