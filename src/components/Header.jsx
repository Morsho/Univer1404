function Header() {
  return (
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-blue-600">AttenGo</h1>
        <nav class="space-x-6 space-x-reverse hidden md:flex">
          <a href="#" class="hover:text-blue-600">
            خانه
          </a>
          <a href="#" class="hover:text-blue-600">
            امکانات
          </a>
          <a href="#" class="hover:text-blue-600">
            درباره ما
          </a>
          <a href="#" class="hover:text-blue-600">
            ورود
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
