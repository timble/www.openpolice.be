---
layout: documentation
title: 1. Access
rooturl: documentation
url: 
index: 1
---

## Setup

The Belgian Police Internet Platform uses a multi-site setup. All websites use the same codebase but the configuration, database, content and users are separate. This allows you to create a website with the content of your zone but based on the same look & feel.

{% assign image = "/images/documentation/multisite.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## Production environment

### Site

Your website is what is seen by a visitor on:

* http://www.lokalepolitie.be/zonenumber
* http://www.policelocale.be/zonenumber
* http://www.polizei.be/zonenumber

During the development of your new website it is available at:

* http://p.pol-nl.be/zonenumber
* http://p.pol-fr.be/zonenumber
* http://p.pol-de.be/zonenumber

{% assign image = "/images/documentation/site-homepage.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

### Administrator area

To manage your website, you have to login into the administrator area, using the latest Chrome / Firefox browser, located at:

* http://www.lokalepolitie.be/administrator/zonenumber
* http://www.policelocale.be/administrator/zonenumber
* http://www.polizei.be/administrator/zonenumber

During the development of your new website the administrator area is available at:

* http://p.pol-nl.be/administrator/zonenumber
* http://p.pol-fr.be/administrator/zonenumber
* http://p.pol-de.be/administrator/zonenumber

{% assign image = "/images/documentation/admin-login.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## Staging environment

There is also a staging environment available for testing, every night the production environment is copied to staging.

Site:

* http://s.pol-nl.be/zonenumber
* http://s.pol-fr.be/zonenumber
* http://s.pol-de.be/zonenumber

Administrator area:

* http://s.pol-nl.be/administrator/zonenumber
* http://s.pol-fr.be/administrator/zonenumber
* http://s.pol-de.be/administrator/zonenumber

## Browser authentication

When you use the production (during development) or staging URLs you'll have to authenticate using following credentials:

* User Name: police
* Password: police

{% assign image = "/images/documentation/browser-authentication.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## Dashboard

Once you are logged in to the administrator area of your website you'll see the dashboard with an overview of the recent activities on your site.

{% assign image = "/images/documentation/admin-dashboard.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>

## Navigation

You can navigate through the administrator area using the navigation bar at the top of the page.

{% assign image = "/images/documentation/admin-navigation.png" %}
<a href="{{image}}" data-gallery="enabled">
![]({{image}})
</a>