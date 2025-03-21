<link rel="stylesheet" href="/assets/css/style.css">
---
layout: default
title: "📂 DevIRU0413 Obsidian 블로그"
---

# 🧠 내 지식 노트

> Obsidian 스타일로 정리된 C#/.NET 학습 블로그입니다.

---

## 📚 글 목록

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> <small>{{ post.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
</ul>
