require "tmpdir"

# Change your GitHub reponame eg. "username/repository"
GITHUB_REPONAME = "belgianpolice/styleguide"


namespace :site do
  desc "Generate and publish blog to gh-pages"
  task :publish do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp
      Dir.chdir tmp
      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
      system "git push origin master:refs/heads/gh-pages --force"
    end
  end
end
