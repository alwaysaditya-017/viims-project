import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 ml-72">

        {/* Header */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
