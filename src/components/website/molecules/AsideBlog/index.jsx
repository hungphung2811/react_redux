import React from 'react'

function AsideBlog() {
    return (
        <>
            <div>
                <div>
                    <h3 className="text-lg font-semibold font-momo mb-3">Search</h3>
                    <form action>
                        <div className="relative">
                            <input type="text" className="w-full text-xs text-gray-600 border border-gray-300 pl-2 focus:border-gray-300" placeholder="Search..." />
                            <button className="absolute top-1/3 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <h3 className="text-lg font-semibold font-momo mt-5 mb-3">Blog categories</h3>
                    <div>
                        <ul>
                            <li><a className="text-xs font-momo text-gray-500" href="/#/">Bags</a></li>
                            <li><a className="text-xs font-momo text-gray-500" href="/#/">Dresses</a></li>
                            <li><a className="text-xs font-momo text-gray-500" href="/#/">Clothes</a></li>
                            <li><a className="text-xs font-momo text-gray-500" href="/#/">Shoes</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <h3 className="text-lg font-semibold font-momo mt-5 mb-3">Products tags</h3>
                    <div>
                        <ul className="flex">
                            <li><a className="px-2 text-xs font-momo text-gray-500" href="/#/">Bags</a></li>
                            <li><a className="px-2 text-xs font-momo text-gray-500" href="/#/">Dresses</a></li>
                            <li><a className="px-2 text-xs font-momo text-gray-500" href="/#/">Clothes</a></li>
                            <li><a className="px-2 text-xs font-momo text-gray-500" href="/#/">Shoes</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <h3 className="text-lg font-semibold font-momo mt-5 mb-3">Lastest Post</h3>
                    <div>
                        list post
                    </div>
                </div>
            </div>

        </>
    )
}

export default AsideBlog
