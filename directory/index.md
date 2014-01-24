---
layout: page
title: titles.directory
---

{% translate pledge %}


### {% translate directory_header %}

<ul class="directory">
    {% for company in site.data.directory %}
    <li><a href="{{ company.url }}">
        <span class="logo"><img src="/img/logos/{{ company.slug }}.svg" 
            alt="{{ company.name }} logo"></span>
        <span class="name">{{ company.name }}</span>
        <span class="description">{{ company.description }}</span>
    </a></li>
    {% endfor %}
</ul>
<div class="clear"></div>
