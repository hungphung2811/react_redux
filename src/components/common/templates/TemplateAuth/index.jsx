import React from 'react'
import { Link } from 'react-router-dom'

function TemplateAuth({ children }) {
    return (
        <div>
            <header>
                header auth
                <nav>
                    <Link to='/home'>
                        quay lai home
                    </Link>
                </nav>
            </header>
            <div>
                {children}
            </div>
        </div>
    )
}

export default TemplateAuth
