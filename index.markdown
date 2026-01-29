---
layout: default
title: Welcome
---

<!-- Welcome Section -->
<section class="min-h-[70vh] flex items-center justify-center px-4">
  <div class="max-w-4xl mx-auto text-center">
    <!-- Greeting -->
    <div class="mb-8">
      <h1 class="text-5xl md:text-7xl font-extrabold mb-4">
        <span class="bg-gradient-to-r from-red-400 via-orange-500 to-pink-600 dark:from-emerald-700 dark:via-teal-600 dark:to-slate-400 bg-clip-text text-transparent">
          Welcome!
        </span>
      </h1>
      <p class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
        I'm Annabel Gray
      </p>
      <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
        A product designer passionate about creating intuitive user experiences and bringing ideas to life through thoughtful design.
      </p>
    </div>

    <!-- Branding Element -->
    <div class="flex justify-center items-center gap-2 mb-12">
      <div class="text-3xl font-bold tracking-wide text-gray-700 dark:text-gray-200">ANNABEL</div>
      <div class="h-6 w-6 bg-gradient-to-br from-orange-400 to-pink-500 dark:from-emerald-600 dark:to-teal-500 rounded-full"></div>
      <div class="text-3xl font-bold tracking-wide text-gray-700 dark:text-gray-200">GRAY</div>
    </div>

    <!-- Navigation Cards -->
    <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <!-- About Card -->
      <a
        href="/about/"
        class="group p-8 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <div class="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto text-pink-600 dark:text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-emerald-400">
          About Me
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Learn about my journey, experience, and what I'm passionate about
        </p>
      </a>

      <!-- Media Card -->
      <a
        href="/media/"
        class="group p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <div class="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto text-pink-600 dark:text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-emerald-400">
          Media
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Explore my publications, videos, and featured work
        </p>
      </a>
    </div>

    <!-- Additional Message -->
    <div class="mt-12">
      <p class="text-gray-500 dark:text-gray-400 italic">
        Thanks for visiting! Feel free to explore and get in touch.
      </p>
    </div>
  </div>
</section>
