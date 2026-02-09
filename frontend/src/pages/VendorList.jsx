import { useEffect, useState } from "react";
import api from "../api/api";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
    
  useEffect(() => {    
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const res = await api.get("/vendor/list");
      setVendors(res.data);
    } catch (err) {
      console.error("Failed to fetch vendors", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredVendors = vendors.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 flex justify-center p-6">
      <div className="w-full max-w-6xl space-y-6">

        {/* Header */}
        <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-semibold">Vendor List</h1>
          <p className="text-sm text-indigo-100">
            View and manage registered vendors
          </p>
        </div>

        {/* Search */}
        <div className="rounded-xl bg-white p-4 shadow">
          <input
            type="text"
            placeholder="Search by vendor name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        

        {/* Table */}
        <div className="rounded-xl bg-white shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">
              Loading vendors...
            </div>
          ) : filteredVendors.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No vendors found.
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-indigo-50 text-indigo-700 text-sm">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Email</th>
                  <th className="px-6 py-4 text-left font-semibold">Phone</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {filteredVendors.map(v => (
                  <tr
                    key={v.id}
                    className="hover:bg-indigo-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {v.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {v.email}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {v.phone || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold
                          ${v.active
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-700"}`}
                      >
                        {v.active ? "ACTIVE" : "INACTIVE"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}  
