import DashboardLayout from "./DashboardLayout";

function Attendance() {
  return (
    <DashboardLayout>
      {/* Page Title */}
      <div className="mb-6">
        <h3 className="text-xl font-bold">ثبت حضور</h3>
        <p className="text-gray-500 text-sm mt-1">ثبت و مدیریت حضور کاربران</p>
      </div>

      {/* Attendance Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8 max-w-xl">
        <h4 className="font-semibold mb-4">فرم ثبت حضور</h4>

        <form className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">نام کاربر</label>
            <input
              type="text"
              placeholder="نام دانشجو"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 text-sm font-medium">تاریخ</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block mb-2 text-sm font-medium">وضعیت حضور</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>حاضر</option>
              <option>غایب</option>
              <option>تاخیر</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ثبت حضور
          </button>
        </form>
      </div>

      {/* Attendance List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h4 className="font-semibold mb-4">لیست حضور امروز</h4>

        <table className="w-full text-sm text-right border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">نام</th>
              <th className="py-2">تاریخ</th>
              <th className="py-2">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">علی رضایی</td>
              <td className="py-2">1403/10/12</td>
              <td className="py-2 text-green-600">حاضر</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">محمد احمدی</td>
              <td className="py-2">1403/10/12</td>
              <td className="py-2 text-red-600">غایب</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Attendance;
