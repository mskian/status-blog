# San Status 😊

[![Build Status](https://travis-ci.org/mskian/status-blog.svg?branch=master)](https://travis-ci.org/mskian/status-blog) ![Uptime Robot status](https://img.shields.io/uptimerobot/status/m784619262-a0febe3c1705a879cc68d9b9?label=Website)  

A Simple Static Site Build using Jekyll 📦  

## Features ✨

- SEO Meta Tags
- Social Meta Tags
- Schema Markup
- Custom Post date,permalink,title,Description,image and Author Name
- Design Using Bulma CSS
- Speed Optimized
- Pagination
- Custom Pages
- Layouts
- PWA Support
- Lightweight and Minimal
- Free Hosting Support (Github pages and Netlify)
- RSS Feed
- XML Sitemap
- Markdown
- Easy to Setup and Configure
- Travis CI Test

## Usage 🛠

- Clone this Repo

```bash
git clone https://github.com/mskian/status-blog.git
cd status-blog
```

- install DEPENDENCIES

```bash
bundle install
```

- Test the site

```bash
bundle exec jekyll serve
```

- Build the site

```bash
bundle exec jekyll build
```

- Create New Post

```bash
bundle exec jekyll post "My New Post"
```

- Generate Version Number

```bash
rake bump
```

## Deploy 🚁

Here is the simple bash script to deploy the Static files to Server.

```sh
#!/bin/bash

JEKYLL_ENV=production bundle exec jekyll build
rsync -avr --rsh='ssh' --delete-after --delete-excluded _site/ root@<Your Server IP>:/var/www/mysite/_site
```

## LICENSE 📜

MIT
