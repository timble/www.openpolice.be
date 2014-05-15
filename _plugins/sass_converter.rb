module Jekyll
  # Sass plugin to convert .scss to .css
  #
  # Note: This is configured to use the new css like syntax available in sass.
  require 'sass'
  class SassConverter < Converter
    safe true
    priority :low
 
     def matches(ext)
      ext =~ /scss/i
    end
 
    def output_ext(ext)
      ".css"
    end

	def colorize(text, color)
	  "#{color}#{text}\e[0m"
	end

    def convert(content)
      begin
        puts "Performing Sass Conversion."
        engine = Sass::Engine.new(content, :syntax => :scss, :cache_location => './css/.sass-cache', :load_paths => ["./css/"])
        engine.render
      rescue StandardError => e
        puts colorize("SASS Error: "+e.message, "\e[31m")
      end
    end
  end
end