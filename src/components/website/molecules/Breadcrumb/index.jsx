import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ children }) {
    return (
        <div className="container mx-auto py-10 text-center bg-gray-100">
            <h3 className="text-2xl font-mono font-semibold capitalize">{children}</h3>
            <div>
                <span>
                    <Link className="text-xs text-gray-600 text-opacity-70" to='/home'>Homepage</Link>
                    </span>
                <span className="text-xs text-gray-600 text-opacity-90">&gt;</span>
                <span className="text-xs text-gray-900">{children}</span>
            </div>
        </div>
    )
}

export default Breadcrumb
