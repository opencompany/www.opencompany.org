---
layout: page
title: Répertoire des entreprises libres
---

{% include fr_pledge.md %}


### Entreprises adhérentes

<ul class="directory">
    {% for company in site.data.directory %}
    <li><a href="{{ company.url }}">
        <span class="logo"><img src="/img/logos/{{ company.logo }}" 
            alt="{{ company.name }} logo"></span>
        <span class="name">{{ company.name }}</span>
        <span class="description">{{ company.description }}</span>
    </a></li>
    {% endfor %}
</ul>
<div class="clear"></div>
