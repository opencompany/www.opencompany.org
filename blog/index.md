---
layout: page
title: titles.blog
---

<div class="rss-link">
    <a href="/atom.xml"><img src="/img/rss.png"> RSS feed</a>
</div>

<ul class="blog-index">

    {% for post in site.posts %}
    <li>
        <span>{{ post.date | date_to_string }} </span> 
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>
