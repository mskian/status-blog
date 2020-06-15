desc "Bump version number"
task :bump do
    content = IO.read('_config.yml')
    content.sub!(/^version: (\d+)$/) {|v|
        ver = $1.next
        puts "At version #{ver}"
        "version: #{ver}"
    }
    File.open('_config.yml','w') do |f|
        f.write content
    end
end