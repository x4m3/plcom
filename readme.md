# plcom
my website

it should be available at [philippeloctaux.com](https://philippeloctaux.com)

## tech
i use [gulp](https://gulpjs.com) to automate the build process  
the host is a vps hosted with [OVH](http://ovh.com) running debian 8.10  
webserver is [nginx](https://nginx.org), and the tls/ssl certs are served with [let's encrypt](https://letsencrypt.org).

## commands to run
**protip**: for the server: use a hook in the git repo to do that
```
npm i
npm run gulp build
```
## commands to run for phil
`git remote add deploy vps:~/plcom-gulp.git`

## git hook on the server
```bash
#!/bin/sh

GIT_REPO=https://github.com/x4m3/plcom.git
TMP_GIT_CLONE=/tmp/plcom
PUBLIC_WWW=/srv/www/phil

echo "starting"
git clone $GIT_REPO $TMP_GIT_CLONE --depth=1
echo "git repo cloned"
cd $TMP_GIT_CLONE
echo "installing npm stuff"
npm i
echo "building"
npm run gulp build
cp out/* $PUBLIC_WWW -r -v
rm -Rf $TMP_GIT_CLONE
echo "built and ready to be served"
exit
```
