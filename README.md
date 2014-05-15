# Blog
A product blog about developing and iterating the Belgian Police Internet Platform. For the people who publish content to their sites and anyone else who is interested.

## Installation & Usage
    bundle install
    jekyll serve --watch

_Note: Requires Ruby version 1.9.3 =>. For example use [rbenv](https://github.com/sstephenson/rbenv)_

## Configuration
Edit: _config.yml (general options)

_Note: when editing _config.yml, you need to restart jekyll to see the changes.__

    
## Publish to Github Pages
Run rake task. **NOTE: It will deploy the generated site to _gh-pages_ branch overwriting it**    
``` 
rake site:publish
```
