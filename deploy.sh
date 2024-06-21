#!/bin/bash
npm install && \
rm -rf build && \
rm -rf docs && \
npm run build && mv build docs && \
git add . && git commit -m "Deploy" && \
git push origin main;