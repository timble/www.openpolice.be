---
layout: documentation
title: 1. Access
rooturl: documentation
index: 1
---

## Setup

The Belgian Police Internet Platform uses a multi-site setup. All websites use the same codebase but the configuration, database, content and users are separate. This allows you to create a website with the content of your zone but based on the same look & feel.

<a href="/images/documentation/multisite.png" data-gallery="enabled">
![](/images/documentation/multisite.png)
</a>

## Production environment

### Site

Your website is what is seen by a visitor on:

* http://www.lokalepolitie.be/zonenumber
* http://www.policelocale.be/zonenumber
* http://www.polizei.be/zonenumber

During the development of your new website it is available at:

* http://new.lokalepolitie.be/zonenumber
* http://new.lokalepolitie.be/zonenumber
* http://new.lokalepolitie.be/zonenumber

<a href="/images/documentation/site-homepage.png" data-gallery="enabled">
![](/images/documentation/site-homepage.png)
</a>

### Administrator area

To manage your website, you have to login into the administrator area, using the **latest Chrome or Firefox** browser, located at:

* http://www.lokalepolitie.be/administrator/zonenumber
* http://www.policelocale.be/administrator/zonenumber
* http://www.polizei.be/administrator/zonenumber

<a href="/images/documentation/admin-login.png" data-gallery="enabled">
![](/images/documentation/admin-login.png)
</a>

## Staging environment (for testing only)

There is also a staging environment available **for testing**, every night the production environment is copied to staging.

Site:

* http://staging.lokalepolitie.be/zonenumber
* http://staging.policelocale.be/zonenumber
* http://staging.polizei.be/zonenumber

Administrator area:

* http://staging.lokalepolitie.be/administrator/zonenumber
* http://staging.policelocale.be/administrator/zonenumber
* http://staging.polizei.be/administrator/zonenumber

## Browser authentication

When you use the production (during development) or staging URLs you'll have to authenticate using following credentials:

* User Name: police
* Password: police

<a href="/images/documentation/browser-authentication.png" data-gallery="enabled">
![](/images/documentation/browser-authentication.png)
</a>

## Dashboard

Once you are logged in to the administrator area of your website you'll see the dashboard with an overview of the recent activities on your site.

<a href="/images/documentation/admin-dashboard.png" data-gallery="enabled">
![](/images/documentation/admin-dashboard.png)
</a>

## Navigation

You can navigate through the administrator area using the navigation bar at the top of the page.

<a href="/images/documentation/admin-navigation.png" data-gallery="enabled">
![](/images/documentation/admin-navigation.png)
</a>