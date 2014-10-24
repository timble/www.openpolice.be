<h1>CSS Styleguide</h1>

<p>Welcome to the Belgian Police CSS Styleguide. Before reading this, you should have a general understanding for
specificity, the <a href="http://sass-lang.com/">SCSS</a> syntax, and <a href="https://github.com/kneath/kss">KSS</a>
documentation.</p>

<p>If you're visiting from the internet, feel free to learn from our style. We encourage you to set up one that works
for your own team.</p>

<p>Check our <a href="https://github.com/belgianpolice/www.openpolice.be/tree/gh-pages/styleguide">GitHub repository</a> for the entire codebase of this site.</p>

<h2>Sass for CSS development</h2>
<p><a href="http://sass-lang.com/">Sass</a> provides a plethora of CSS development tools and helpers that not only speed
up front-end development, but also allow for improved code structure and codebase control within a team.
It is especially helpful in managing (and reining in) larger codebases via custom variables, mixins, selector patterns,
as well as a large collection of very useful helpers. Compiled via the Ruby CLI compiler,
one is also given immediate control over source map debugging.
</p>

<p>We take full advantage of mod_pagespeed to rewrite CSS in production so there is no need to remove comments or
minify the output.</p>

<h2>File Organization</h2>
<p>Based on the <a href="http://bradfrostweb.com/blog/post/atomic-web-design/">Atomic Design Principles</a> but slightly
modified for our own needs. Also check <a href="http://coding.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/">"The Other Interface: Atomic Design With Sass"</a>
as a good resource.</p>

The CSS file organization should follow something like this:
<pre>
<code>
css
├── atoms
│   ├── comments.scss
│   └── listings.scss
├── molecules
│   ├── browser_helpers.scss
│   ├── responsive_helpers.scss
│   └── variables.scss
├── organisms
│   ├── jquery.fancybox-1.3.4.css
│   └── reset.scss
└── utilities
    ├── issues.scss
    └── profile.scss
</code>
</pre>

<h2>Modular CSS with BEM</h2>
<p>Our HTML classes follow the <a href="http://bem.info/">BEM methodology</a> as a defined structure.</p>

<h2>Susy for responsive grids</h2>
<p><a href="http://susy.oddbird.net/">Susy</a> is a glorious tool for responsive grids. It does all the percentage maths
for you, allowing you to easily define and update your grid layout via efficient breakpoint mixins coupled with some
really nifty grid helpers.</p>

<h2>Progressive enhancement</h2>
<p>Designs should be approached with a content-first and mobile-first mindset. Following this, CSS breakpoints should
always be mobile-first. All JavaScript should be progressively enhanced and should be used at a conscientious minimum
where possible. Therefore, the concept of progressive enhancement happens from all aspects, from design to development
and back again.</p>
