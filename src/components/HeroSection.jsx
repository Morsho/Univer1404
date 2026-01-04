import { useNavigate } from "react-router-dom";
function HeroSection() {

  const scrollToFeatures = () => {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth",
  });
};
  const navigate = useNavigate();
  
  const isLoggedIn = !!localStorage.getItem("token");

  const goToLogin = () => navigate("/login");
  const goToRegister = () => navigate("/register");

  return (
    <section class="bg-gradient-to-l from-blue-600 to-blue-500 text-white">
      <div class="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          سیستم هوشمند مدیریت حضور و غیاب
        </h2>
        <p class="max-w-2xl mx-auto mb-8 text-lg">
          AttenGo یک راهکار ساده و سریع برای ثبت، مدیریت و گزارش‌گیری حضور
          کاربران در محیط‌های آموزشی است.
        </p>
        <div class="flex justify-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={goToRegister}
              class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              شروع استفاده
            </button>
          ) : (
            <button
              onClick={goToLogin}
              class="cursor-pointer border  border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600"
            >
              ورود
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
