---
layout: layout.html
title: moments
---

<p class="my-2.5">
  rave cafe is a community-driven creative project guided by the principles
  of creative action, communal effort, & gifting. together we've made a chat
  room, events, clothing, and zines.
</p>
<a class="block my-4 underline text-[#a78bfa]" href="/emails"
  ><h2 class="text-xl font-bold">email</h2></a
>
<a
  class="my-2 underline text-[#a78bfa]"
  href="https://soundcloud.com/ravecafe"
  target="_blank"
  rel="noreferrer"
>
  <h2 class="text-xl font-bold">music archive</h2>
</a>
<section>
  <h3 class="text-3xl font-bold my-4">pages</h3>
  {% for post in collections.post reversed %}
  <a class="my-2 block underline text-[#a78bfa]" href="{{ post.url }}">
    {{ post.data.title }}
  </a>
  {% endfor %}
</section>
<section class="border-2 border-white p-2 mt-4">
  <h3 class="text-base font-bold">DISCLAIMER</h3>
  <p class="my-2.5">
    The information provided on this website is for educational purposes
    only. This site is intended as a self-help tool for your own use, and
    should not be considered or used as a substitute for medical advice,
    diagnosis, or treatment. Usage of the health-related information
    contained within these html files is purely for the enhancement of the
    vibes.
  </p>
</section>
