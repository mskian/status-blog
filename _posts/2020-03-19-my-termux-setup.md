---
layout: post
title:  "My Termux setup - Terminal Emulator for Android  🤖"
description: "My Termux Setup - Here is the My Termux Terminal Emulator Setup and Packages."
permalink: "/my-termux-setup/"
author: "Santhosh Veer"
image: "/assets/sanstatus-mytmxsetup1.jpg"
---

Here is My Termux Terminal Emulator Setup &amp; Packages 🔖

> Linux on Android 💯

## Download Termux

Termux Terminal Emulator for Android

Get it from Google Play store 💯

- Install Termux -  <a href="https://play.google.com/store/apps/details?id=com.termux&hl=en" target="_blank" rel="nofollow noopener">https://play.google.com/store/apps/details?id=com.termux&hl=en</a>
- Install Termux API  - <a href="https://play.google.com/store/apps/details?id=com.termux.api&hl=en" target="_blank" rel="nofollow noopener">https://play.google.com/store/apps/details?id=com.termux.api&hl=en</a>
- Install Termux Styling - <a href="https://play.google.com/store/apps/details?id=com.termux.styling" target="_blank" rel="nofollow noopener">https://play.google.com/store/apps/details?id=com.termux.styling</a>

## My Setup & Packages

- Update Termux Packages

```
pkg up
```

- Install cURL

```
pkg install curl
```

- Install git

```
pkg install git
```

- Install wget

```
pkg install wget
```

- Install python3 & python2 ( <a href="https://wiki.termux.com/wiki/Python" target="_blank" rel="nofollow noopener">https://wiki.termux.com/wiki/Python</a>)

### Python2

```
pkg Install python2
```

### Python3

```
pkg install python
```

- Install Nodejs

```
pkg install nodejs
```

- Install jq (pre Format JSON result)

```
pkg install jq
```

- Install libxml2-utils

```
pkg install libxml2-utils
```

- Install grep (about grep -  <a href="https://en.wikipedia.org/wiki/Grep" target="_blank" rel="nofollow noopener">https://en.wikipedia.org/wiki/Grep</a>)

```
pkg install grep
```

- Install bc (Arbitrary Precision Calculator language)

```
pkg install bc
```

- Install htop (Task manager & system Monitor)

```
pkg install htop
```

- Install figlet

```
pkg install figlet
```

- Install httping (pinging tool for HTTP requests)

```
pkg install httping
```

- install dnsutils (Mostly i use this tool for find the website/blog IP address)

```
pkg install dnsutils
```

- Install openssh (For Managing My Servers SSH & SFTP)

```
pkg install openssh
```

- Install FFmpeg (Handling video, audio, and other multimedia files and streams)

```
pkg install ffmpeg
```

- Install youtube-dl

```
curl -sL https://gist.githubusercontent.com/mskian/6ea9c2b32d5f41867e7cafc88d1b26d5/raw/youtube-dl.sh | bash
```

- Install PHP

```
pkg install php
```

- Install PHP Composer on Termux

```
curl -sS https://getcomposer.org/installer | php -- --install-dir=/data/data/com.termux/files/usr/bin --filename=composer
```

- Install nano Editor

```
pkg install nano
```

- Install ZSH (For Run ohmyzsh)

```
pkg install zsh
```

- Install **HTTPie** on Termux (cURL Alternative) and Install Socks for Proxy Connection [Python3 Modules]

```
pip install --upgrade pip setuptools
```

```
pip install --upgrade httpie
```

```
pip install -U requests[socks]
```

```
pip install requests
```

- Required packages for Python development

```
pkg install clang python-dev
```

```
pkg install libffi-dev
```

```
pkg install openssl-dev
```

- DuckDuckGo for Termux

```
pip install ddgr
```

- Install screenfetch (System Information Generator)

```
pkg install screenfetch
```

- Install w3m - Text based Web browser

```
pkg install w3m
```

- Customize the Termux Terminal Emulator - <a href="https://amsk.in/2IF0ibt" target="_blank" rel="nofollow noopener">https://amsk.in/2IF0ibt</a>

- Install `Termux-exec` Read More about this Package - <a href="https://wiki.termux.com/wiki/Termux-exec" target="_blank" rel="nofollow noopener">https://wiki.termux.com/wiki/Termux-exec</a>

```
pkg install termux-exec
```

- Install Termux API (Full info about this - <a href="https://wiki.termux.com/wiki/Termux:API" target="_blank" rel="nofollow noopener">https://wiki.termux.com/wiki/Termux:API</a> (Don't Forget to Install Termux API APP from Playstore)

```
pkg install termux-api
```

- Termux SD Card Permission ( <a href="https://wiki.termux.com/wiki/Termux-setup-storage" target="_blank" rel="nofollow noopener">https://wiki.termux.com/wiki/Termux-setup-storage</a> )

```
pkg up
```

```
termux-setup-storage
```

- Termux Enable Extra Key Rows

```
cd .termux
```

```
nano termux.properties
```

> Copy and Paste the Below Key Configuration in the Termux Properties File - `CTRL + X` to save & Exit

```
extra-keys = [ \
 ['ESC','|','/','HOME','UP','END','PGUP','DEL'], \
 ['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN','BKSP'] \
]
```

- Termux Fix Legacy Warning - <a href="https://github.com/termux/termux-app/issues/1393" target="_blank" rel="nofollow noopener">https://github.com/termux/termux-app/issues/1393</a>

```
termux-upgrade-repo
```

Termux Storage permission did not create symlink for all folders - ( <a href="https://github.com/termux/termux-app/issues/591" target="_blank" rel="nofollow noopener">https://github.com/termux/termux-app/issues/591</a> )

```
cd $HOME
ls
```

- Termux - Check if a program/Package is exists or Not (Verify your Package Installation)

```
curl -sL https://gist.githubusercontent.com/mskian/4278fed4a206f4ec440f0dd512d4540b/raw/package.sh | bash
```

- List the Installed Packages

```
pkg list-installed
```

- Uninstall/Remove Packages

```
pkg uninstall <package-name>
```

- Clear bash Path cache

```
hash -r
```

- Termux Help

```
pkg help
```

- Enable Extra Keys ( <a href="https://wiki.termux.com/wiki/Touch_Keyboard" target="_blank" rel="nofollow noopener">https://wiki.termux.com/wiki/Touch_Keyboard</a> ) **Volume UP+Q**

Learn More about Termux Visit - <a href="https://termux.com/" target="_blank" rel="nofollow noopener">https://termux.com/</a>

Bookmark this Page More Updates on the way 😊
