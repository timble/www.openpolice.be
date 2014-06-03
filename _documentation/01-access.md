---
layout: documentation
title: 1. Access
rooturl: documentation
---

## Setup

The Belgian Police Internet Platform uses a multi-site setup. All websites use the same codebase but the configuration, database, content and users are separate. This allows you to create a website with the content of your zone but based on the same look & feel.

![Multi-site]({{site.url}}/images/documentation/multisite.png)

## Site

Your website is what is seen by a visitor on:

* http://www.lokalepolitie.be/zonenumber
* http://www.policelocale.be/zonenumber
* http://www.polizei.be/zonenumber

During the development of your new website it is available at:

* http://p.pol-nl.be/zonenumber
* http://p.pol-fr.be/zonenumber
* http://p.pol-de.be/zonenumber

![Homepage]({{site.url}}/images/documentation/site-homepage.png)

## Production environment
To manage your website, you have to login into the administrator area, using the latest Chrome / Firefox browser, located at:

* http://www.lokalepolitie.be/administrator/zonenumber
* http://www.policelocale.be/administrator/zonenumber
* http://www.polizei.be/administrator/zonenumber

During the development of your new website it is available at:

* http://p.pol-nl.be/administrator/zonenumber
* http://p.pol-fr.be/administrator/zonenumber
* http://p.pol-de.be/administrator/zonenumber

![Homepage]({{site.url}}/images/documentation/admin-login.png)

## Staging environment

There is also a staging environment available for testing, this site will be replaced with your production website every night.

Site:

* http://s.pol-nl.be/zonenumber
* http://s.pol-fr.be/zonenumber
* http://s.pol-de.be/zonenumber

Administrator:

* http://s.pol-nl.be/administrator/zonenumber
* http://s.pol-fr.be/administrator/zonenumber
* http://s.pol-de.be/administrator/zonenumber

## Browser authentication

When you use the production (development) or staging URLs (see above steps) you'll have to authenticate using following credentials:

* User Name: police
* Password: police

![Homepage]({{site.url}}/images/documentation/browser-authentication.png)

## Dashboard

Once you are logged in to the administrator area of your website you'll see the dashboard with an overview of the recent activities on your site.

![Homepage]({{site.url}}/images/documentation/admin-dashboard.png)

## Navigation

You can navigate through the administrator area using the navigation bar at the top of the page.

![Navigation]({{site.url}}/images/documentation/admin-navigation.png)