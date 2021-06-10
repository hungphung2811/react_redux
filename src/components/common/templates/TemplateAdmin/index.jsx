import HeaderAdmin from 'components/admin/organisms/HeaderAdmin';
import SideBarAdmin from 'components/admin/organisms/SideBarAdmin';
import React from 'react';

function TemplateAdmin({ children }) {
    // const history = useHistory()
    // const { token, user } = getFromLocalStorage('user');
    // const checkAdmin = checkAdminLocal(user, token);
    // console.log(checkAdmin);
    // if (!checkAdmin) {
    //     console.log('loi local');
    //     history.push('/home')
    //     window.alert('da co loi xay ra . vui long thu lai')
    // }
    // (async () => {
    //     try {
    //         const dataUserAdmin = await AuthApi.checkAdmin(user._id, token);
    //         console.log(dataUserAdmin);
    //     } catch (error) {
    //         history.push('/home')
    //         window.alert('da co loi xay ra . vui long thu lai')
    //     }
    // })();

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
