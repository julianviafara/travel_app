import { Outlet } from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {NavItems} from "../../../components";
import data from "../../../env.json"

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <aside className="w-full max-w-[270px] hidden lg:block">
                <SidebarComponent>
                    <NavItems/>
                </SidebarComponent>
            </aside>
            <p> <br/>hola {data.VITE_SYNCFUSION_LICENSE_KEY}</p>
            <aside className="children">
                <Outlet />
            </aside>
        </div>


    );
};

export default AdminLayout;