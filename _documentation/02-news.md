---
layout: documentation
title: 2. News
rooturl: documentation
index: 2
---

## Manage news

{% assign image = "/images/documentation/news-admin-articles.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## Create a news article

1. Title
2. Slug, URL friendly version of the post title - automatically generated
3. Text editor, notice the read more button to separate intro and full text
4. Published state
5. Sticky state, feature this article on the homepage (latest article by default)
6. Created on date
7. Attachments, images (the starred image will be the leading image) & documents

{% assign image = "/images/documentation/news-admin-article.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## News articles on site

1. Introtext with 'Read more' link
2. Starred image

{% assign image = "/images/documentation/news-site-articles.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## News article on site

1. Introtext in bold
2. Starred image
3. Attachments

{% assign image = "/images/documentation/news-site-article.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## News articles on homepage

By default the latest article will be featured on the homepage, however, you can override this by setting another article as sticky.

{% assign image = "/images/documentation/news-site-homepage.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>