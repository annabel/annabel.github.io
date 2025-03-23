---
layout: default
title: Media
permalink: /media/
---

<!-- Publications -->
<section class="md:px-10">
  <div class="px-4 md:px-10 lg:flex">
    <h2 class="text-4xl mb-4 lg:mr-20 whitespace-nowrap">Publications</h2>
    <div class="flex gap-8 flex-col">
      {% for category in site.data.publications %}
        {% include publication_category.html
          category=category.category
          description=category.description
          items=category.items
        %}
        {% unless forloop.last %}
        {% endunless %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- Videos -->
<section class="md:px-10 mt-14">
  <div class="px-4 md:px-10 lg:flex py-12 bg-neutral-100 dark:bg-neutral-700 rounded dark:text-neutral-300">
    <h2 class="text-4xl mb-4 lg:mr-20 whitespace-nowrap">Videos</h2>
    <div class="flex gap-8 flex-col w-full">
      {% for category in site.data.videos %}
        {% include video_category.html
          category=category.category
          description=category.description
          videos=category.videos
        %}
        {% unless forloop.last %}
        {% endunless %}
      {% endfor %}
    </div>
  </div>
</section>
