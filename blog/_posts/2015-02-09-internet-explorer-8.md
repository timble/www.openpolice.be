---
layout: post
title: Internet Explorer 8
author: Tom Janssens
image: 2015/internet-explorer/ie8.jpg
rooturl: blog
---

A few weeks ago we have changed the layout for the Internet Explorer 8 browser. Let us tell you why.

The platform is built following a [Mobile First](http://zurb.com/word/mobile-first) methodology where smaller width devices get a single column layout.

But because Internet Explorer 8 and lower does not 
support [media queries](http://www.w3schools.com/cssref/css3_pr_mediaquery.asp), they get the small screen layout (mobile version) instead of the bigger screen version.

## Only 2,5% visitors

Until the beginning of 2015 we were maintaining a [specific stylesheet](http://jakearchibald.github.io/sass-ie/) for Internet Explorer 8 to provide the bigger screen experience for Internet Explorer 8 too.

Over the last year visitors using Internet Explorer 8 dropped with 64%, resulting in only 2,5% of all visitors today.
Therefor we decided to remove the stylesheet and offer Internet Explorer 8 visitors, like Internet Explorer 7 and lower, the <a href="{{site.url}}/images/blog/2015/internet-explorer/win7_ie_8.0.png" data-gallery="enabled">small screen layout (full screenschot)</a>.

This reduces the development and testing time of new features, so we can increase our productivity.

## Nobody is left behind

However, unlike [other government websites](http://www.vlaamseinfolijn.be/nieuws/vlaanderenbe-stopt-met-ondersteuning-ie8), we leave nobody behind!
We believe information needs to be accessible, whatever device users are using. Even if those 2,5% visitors are still using an operating system (Windows XP) that is no longer receiving [security updates](http://www.microsoft.com/en-us/windows/enterprise/end-of-support.aspx). 

By using a [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy we can add the latest and greatest browser features and still support older browsers, like Internet Explorer 8 and lower.

Users don’t care about how your site looks, as long as the site works so they can get stuff done.
