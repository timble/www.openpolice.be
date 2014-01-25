# CSS Styleguide

Welcome to the Belgian Police Styleguide. Before reading this, you should have a general understanding for specificity,
the [SCSS](http://sass-lang.com/) syntax, and [KSS](https://github.com/kneath/kss) documentation.

If you're visiting from the internet, feel free to learn from our style. This is a guide we use for our own apps
internally at GitHub. We encourage you to set up one that works for your own team.

Check the styleguide at [http://belgianpolice.github.io/styleguide/](http://belgianpolice.github.io/styleguide/).

## Installation

Run it with:

    bundle install
    bundle exec ruby app.rb

## Publish site

Download the local website using:

    wget --page-requisites --convert-links --recursive --html-extension --directory-prefix=_site -nH http://localhost:4567

Publish to the gh-pages branch

    rake site:publish