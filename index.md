---
layout: default
title: "DevIRU0413 블로그"
---

# 👋 환영합니다!

이 블로그는 C#과 .NET Framework 공부 기록을 정리한 공간입니다.

---

## 📚 최신 글 목록

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>
