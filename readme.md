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
