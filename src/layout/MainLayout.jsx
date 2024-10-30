import MySidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flowbite } from "flowbite-react";

export default function MainLayout() {
  return (
    <Flowbite>
      <div className="dark:bg-black">
        <header>
          <Navbar />
        </header>
        <div className="flex">
          <aside className="w-64">
            <MySidebar />
          </aside>
          <main className="flex-grow h-screen overflow-y-scroll p-10 bg-white dark:bg-gray-800">
            <Outlet />
          </main>
        </div>
      </div>
    </Flowbite>
  );
}
