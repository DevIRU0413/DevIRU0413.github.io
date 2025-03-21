---
layout: default
title: 글 목록
---

<h2>📚 글 목록</h2>
<input type="text" id="search" placeholder="검색어 입력..." style="width: 100%; padding: 0.5em; margin-bottom: 1em;">

<ul>
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>