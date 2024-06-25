#!/bin/bash
npm install && \
rm -rf build && \
rm -rf docs && \
npm run build && mv build docs && \
cp docs/index.html docs/404.html && \
echo -n "heartcitynow.com" > docs/CNAME && \
git add . && git commit -m "Deploy" && \
git push origin main;