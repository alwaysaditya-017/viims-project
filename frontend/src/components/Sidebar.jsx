import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Add User", path: "/users/add" },
    { name: "Users", path: "/users" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white">

      <div className="px-5 py-4 border-b border-blue-800">
        <h1 className="text-sm font-semibold">Dept. of Co-operation</h1>
        <p className="text-xs text-blue-300">Government of Odisha</p>
      </div>

      <nav className="mt-6 space-y-2 px-3">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 font-medium ${
                isActive
                  ? "bg-yellow-400 text-slate-900"
                  : "hover:bg-blue-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}
