export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-3">

        <h2 className="text-lg font-semibold text-slate-700">
          Training Calendar
        </h2>

        <div className="flex items-center gap-4">
          <div className="h-9 w-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
            A
          </div>
          <button className="text-sm text-red-600 hover:underline">
            Logout
          </button>
        </div>

      </div>
    </header>
  );
}
