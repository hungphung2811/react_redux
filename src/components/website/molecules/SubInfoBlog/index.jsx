import React from 'react'

function SubInfoBlog() {
    return (
        <div className="flex items-center justify-start">
            <p className="bg-yellow-600 hover:bg-yellow-800 p-1 mr-2 text-white font-semibold text-xs uppercase">
                bags</p>
            <p className="bg-yellow-600 hover:bg-yellow-800 p-1 mr-2 text-white font-semibold text-xs uppercase">
                Shoes</p>
            <div className="mr-2">
                <span className="text-gray-500 text-xs uppercase">By namam</span>
            </div>
            <div>
                <span className="text-gray-500 text-xs uppercase">DECEMBER 21, 2020</span>
            </div>
        </div>
    )
}

export default SubInfoBlog
