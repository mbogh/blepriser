#!/bin/sh
cp -R ./source/* ./_deploy/
cd ./_deploy/
git add -A
printf -v message 'Site updated at %s' date
git commit -m "$message"
git push -u origin gh-pages