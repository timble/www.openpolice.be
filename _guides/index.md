---
layout: guides
title: Guides
rooturl: guides
---

Our guides are a valuable resource for anyone involved in creating content for the web. They will help you make all information accessible, readable and understandable:

<ul>
    {% for post in site.guides | sort: 'index' %}
    {% assign current = nil %}
    {% if post.url == page.url %}
    {% assign current = ' class="active"' %}
    {% endif %}
    {% if post.url != '/guides/index.html' %}
    <li{{current}}><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>

We specifically wanna thank the [Government Digital Service team](https://gds.blog.gov.uk/) of GOV.UK for providing an awesome public [style guide](https://www.gov.uk/design-principles/style-guide) and [social media playbook](https://gdssocialmedia.blog.gov.uk/playbook/#the-case-for-social-media).