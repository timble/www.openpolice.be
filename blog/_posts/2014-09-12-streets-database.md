---
layout: post
title: Streets based on Open Data
author: Tom Janssens
image: 2014/agiv-logo.jpg
rooturl: blog
---

The Police Platform makes heavy use of street based location information, local police officers, news, traffic infomation etc are all tagged with streetnames. Since a few weeks our street database is synced automatically, every wednesday evening, using the [CRAB database](https://www.agiv.be/producten/crab) of the Flemish Governement.

CRAB is an [Open Data](https://okfn.org/opendata/) service provided by [AGIV](https://www.agiv.be/), a Flemish governement agency responsible for all governement digital GIS services.

We use the database in read-only mode, meaning that we only update the streets when they are changed. Streets can be added or changed in CRAB by city administrators. More information about the CRAB validation process by the cities in Flanders can be found on [www.agiv.be](https://www.agiv.be/news/2014/juni/crab-validatie-op-kruissnelheid).

At the moment the streets are only updates for the Flemish part of Belgium using Agiv. We are also working with [Géoportail de la Wallonie](http://geoportail.wallonie.be/) & [CIBG Brussels](http://www.cibg.irisnet.be/) to see if they can help us to further optimise our streets database using Open Data and provide support for the whole of Belgium.

## Streets in your site

You can verify if all your streets are attached to a district officer by navigating to **Tools > Streets** in your administrator interface and filter for **No District Officer**.
Or sort the table based on the **Created on** column to verify when a new street has been added.

<a class="thumbnail" href="/images/blog/2014/streets-database.jpg" data-gallery="enabled">
![Streets database](/images/blog/2014/streets-database.jpg)
</a>


## What is Open Data?

Wanna know more about Open Data? Check the following animation explaining the uses of Open Data in the world.

<iframe src="//player.vimeo.com/video/32834119" width="100%" height="370" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/32834119">Open Data Explained - Animation</a> from <a href="http://vimeo.com/inventorium">Inventorium</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
