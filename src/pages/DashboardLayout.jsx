function DashboardLayout({children}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-200 hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold text-blue-400">AttenGo</div>

        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
            داشبورد
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
            ثبت حضور
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
            گزارش‌ها
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
            کاربران
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
            تنظیمات
          </a>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
            خروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg">داشبورد</h2>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">مرتضی شکری</span>
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
              M
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
