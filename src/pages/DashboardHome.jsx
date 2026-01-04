import React from "react";
import DashboardLayout from "./DashboardLayout";

function DashboardHome() {
  return (
    <DashboardLayout>
      <h3 className="text-xl font-bold mb-6">خوش آمدید 👋</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">کل کاربران</p>
          <h4 className="text-2xl font-bold mt-2">120</h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">حضور امروز</p>
          <h4 className="text-2xl font-bold mt-2">85</h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">غیبت‌ها</p>
          <h4 className="text-2xl font-bold mt-2">35</h4>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardHome;
