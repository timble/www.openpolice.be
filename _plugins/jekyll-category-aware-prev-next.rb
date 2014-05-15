module Jekyll
  class CategoryAwarePrevNextGenerator < Generator

    safe true
    priority :high

    def generate(site)
      site.categories.each_pair do |category_name, posts|
        posts.sort! { |a, b| a <=> b }
        
        posts.each do |post|
          position = posts.index post

          if position && position < posts.length - 1
            category_next = posts[position + 1]
          else
            category_next = nil
          end
          
          if position && position > 0
            category_previous = posts[position - 1]
          else
            category_previous = nil
          end

          post.data["cat_next"] = category_next unless category_next.nil?
          post.data["cat_previous"] = category_previous unless category_previous.nil?
        end
      end
    end
  end
end
