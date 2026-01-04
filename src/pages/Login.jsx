function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600">AttenGo</h1>
          <p className="text-gray-500 mt-2">ورود به حساب کاربری</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">ایمیل</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">رمز عبور</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              مرا به خاطر بسپار
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              فراموشی رمز؟
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ورود
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          حساب کاربری ندارید؟
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline mr-1"
          >
            ثبت‌ نام
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
