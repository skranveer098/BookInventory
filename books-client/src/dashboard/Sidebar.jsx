import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiTable,
} from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { AuthContext } from "../contexts/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white md:h-screen overflow-hidden">
      <Sidebar
        aria-label="Sidebar with content separator example"
        className="h-full overflow-hidden"
      >
        <div className="flex items-center p-4 bg-indigo-700 rounded-b-lg">
          <img
            src={user?.photoURL || userImg}
            alt="User Profile"
            className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
          />
          <span className="ml-1 text-lg font-semibold ">
            {user?.displayName || "Demo User"}
          </span>
        </div>
        <Sidebar.Items className="mt-6 overflow-auto">
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={HiChartPie}
              className="hover:bg-indigo-600"
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
              className="hover:bg-purple-600"
            >
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/manage"
              icon={HiInbox}
              className="hover:bg-pink-600"
            >
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item
              href="/login"
              icon={HiArrowSmRight}
              className="hover:bg-pink-600"
            >
              Sign In
            </Sidebar.Item>
            <Sidebar.Item
              href="/logout"
              icon={HiTable}
              className="hover:bg-indigo-600"
            >
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            {/* Additional items can go here */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
