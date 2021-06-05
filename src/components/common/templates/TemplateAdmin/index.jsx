import HeaderAdmin from 'components/admin/organisms/HeaderAdmin'
import SideBarAdmin from 'components/admin/organisms/SideBarAdmin'
import React from 'react'

function TemplateAdmin({ children }) {
    return (
        <>
            <div class="grid grid-cols-12 container mx-auto">
                <SideBarAdmin />
                <main class="col-span-10">
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
