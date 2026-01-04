import React from "react";

function Features() {
  return (
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-bold text-center mb-12">امکانات AttenGo</h3>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow">
            <h4 class="font-semibold text-lg mb-2">ثبت حضور</h4>
            <p class="text-gray-600">
              ثبت سریع حضور کاربران با رابط کاربری ساده
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h4 class="font-semibold text-lg mb-2">گزارش‌گیری</h4>
            <p class="text-gray-600">
              مشاهده و بررسی گزارش‌های حضور به صورت دقیق
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h4 class="font-semibold text-lg mb-2">مدیریت کاربران</h4>
            <p class="text-gray-600">مدیریت اطلاعات کاربران و دسترسی‌ها</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
