---
layout: default
title: Home
---

<!-- Intro -->
<section
  class="pt-12 sm:pt-32 pb-16 sm:pb-52 md:flex mx-auto justify-center text-center md:text-left md:pl-10"
>
  <h1
    class="text-3xl md:text-5xl max-w-xl mx-auto md:mx-0 md:max-w-lg px-4 md:px-0"
  >
    I'm Annabel and I'm a
    <span class="line-through old-job">frontend developer</span>
    <span
      class="font-extrabold bg-gradient-to-r from-red-400 via-orange-500 to-pink-600 dark:from-emerald-700 dark:via-teal-600 dark:to-slate-400 bg-clip-text text-transparent"
      >product designer</span
    >, currently at
    <a
      href="https://gitlab.com/annabeldunstone"
      class="hover:underline underline-offset-4"
      >GitLab</a
    >
  </h1>
  <div
    class="relative top-4 md:-left-20 md:top-14 h-48 w-48 mx-auto md:mx-0"
  >
    <img src="/assets/images/notion-avatar.png" class="avatar" />
  </div>
</section>

<!-- Case studies -->

{% include case_study.html cases=site.data.case_studies %}

<!-- About -->
<section class="md:px-10">
  <div class="px-4 md:px-10 lg:flex">
    <h2 class="text-4xl mb-4 lg:mr-20 whitespace-nowrap">About me</h2>
    <div class="flex gap-8 flex-col">
      <div class="mt-2">
        <h3 class="text-2xl mb-2 text-pink-600 dark:text-emerald-500">
          Experience
        </h3>
        <p class="text-lg sm:text-2xl max-w-prose">
          I'm a staff product designer with over 10 years of experience in
          the tech industry. With a background as a frontend developer, I
          bring a unique blend of design thinking and technical expertise
          to every project. I'm passionate about creating intuitive user
          experiences, and leveraging UX research to inform design
          decisions. My approach combines a deep understanding of both
          design and development to craft seamless, user-centered
          products.
        </p>
      </div>
      <div class="mt-2">
        <h3 class="text-2xl mb-2 text-pink-600 dark:text-emerald-500">
          Outside of work
        </h3>
        <div class="text-lg sm:text-2xl max-w-prose">
          When I’m not working, you can usually find me baking, drawing,
          playing with my kids, or reading a good book.
          <div class="mt-2">I'm currently reading:</div>
          {% include book_list.html books=site.data.books.currently_reading %}
          <div class="mt-2">...and recently finished:</div>
          {% include book_list.html books=site.data.books.recently_finished %}
        </div>
      </div>
    </div>
  </div>
</section>
