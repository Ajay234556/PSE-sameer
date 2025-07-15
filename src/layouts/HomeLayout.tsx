import Sidebar from "@/components/app/Sidebar";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <Outlet />
        </div>);
};
export default HomeLayout;