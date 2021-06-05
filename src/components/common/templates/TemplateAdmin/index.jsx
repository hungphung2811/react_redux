import HeaderAdmin from 'components/admin/organisms/HeaderAdmin'
import SideBarAdmin from 'components/admin/organisms/SideBarAdmin'
import React from 'react'

function TemplateAdmin({ children }) {
    return (
        <>
            <div className="grid grid-cols-12 container mx-auto">
                <SideBarAdmin />
                <main className="col-span-10">
                    <HeaderAdmin />
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default TemplateAdmin
