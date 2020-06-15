---
layout: post
title: Jekyll Configure BunnyCDN with Cache Busting 🐰
date: 2020-04-14 15:53 +0530
last_modified_at: 2020-04-15 09:29:09 +0530
description: "Here are the Steps to Configure BunnyCDN for Jekyll with Cache Busting."
permalink: /jekyll-configure-bunnycdn/
author: Santhosh Veer
image: "/assets/sanstatus-bgpost3.jpg"
---

Few Months before I am started using the Jekyll For My Personal Blog and Status Updates.
I want to try something different So I choose this Static Generator
there are Many Static Generators Available in the Market but I am big of Markdown & I want something which is very easy for me to Maintain and Update so I Choosing Jekyll for My Personal Status Update Blog.

Here I am facing some Challenging tasks like setup the CDN for Jekyll
in Wordpress, we have plugin option so we can Easily setup everything
but in Jekyll, We need to Write a Script or Setup Manually.

ok Let's come to the Tutorial part I choose BunnyCDN 🐰 for My Jekyll Site

## Jekyll Configure BunnyCDN

- Open your `config.yml` file and the CDN URL

```
version: 1 # Cache Busting
baseurl:
url: https://blog.example.com # Main Site URL
cdn: https://cdn.example.com # CDN URL
```

- Now we need to Change the site url to cdn url Manually

**Example:**

- Before

{% raw %}
```
<link rel="stylesheet" href="{{site.url}}/assets/css/main.css">
```
{% endraw %}

- After

{% raw %}
```
<link rel="stylesheet" href="{{site.cdn}}/assets/css/main.css">
```
{% endraw %}

<br>

Above step is Ok but I will recommend this Method because while Development we need to Serve the Assets via Local URL to Preview the Live Changes also add **Cache Buster** and Version number in Assets URL - For more about the Cache Buster & Site Versioning - <a href="https://brettterpstra.com/2013/03/05/site-versioning-with-jekyll/" target="_blank" rel="nofollow noopener">https://brettterpstra.com/2013/03/05/site-versioning-with-jekyll/</a>

{% raw %}
```
<link rel="stylesheet" href="{% if jekyll.environment == 'production' %}{{ site.cdn }}{% endif %}/assets/css/main.css?v={{ site.version }}">
```
{% endraw %}

{% raw %}
```
<script src="{% if jekyll.environment == 'production' %}{{ site.cdn }}{% endif %}/assets/js/app.js?v={{ site.version }}"></script>
```
{% endraw %}

Rake Script to Auto Update the Site version Number

- Create New File & named as `Rakefile.rb` add the Below code in that file & save it
- include file in Jekyll Build `exclude`
- Just Run the Command `rake bump` to Execute this Script
- It will Automatically Update the Version Number

```
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
```

## Final Words

I hope this tutorial will help you to Setup BunnyCDN on Jekyll.
