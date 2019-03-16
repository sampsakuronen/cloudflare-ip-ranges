# Cloudflare IP ranges

![npm](https://img.shields.io/npm/v/cloudflare-ip-ranges.svg)
![npm](https://img.shields.io/npm/dy/cloudflare-ip-ranges.svg)
![Travis (.org)](https://img.shields.io/travis/sampsakuronen/cloudflare-ip-ranges.svg)

Get Cloudflare IPs for use in trust proxy configurations.

## Install

    npm install --save-exact cloudflare-ip-ranges

## Example uage

For use in an Express environment please see [Express documentation on trust proxies](https://expressjs.com/en/guide/behind-proxies.html).

    const cloudflareIPRanges = require('cloudflare-ip-ranges')

    cloudflareIPRanges.updateIPs()
      .then((ips) => {
        Object.keys(ips).forEach((key) => {
          app.set('trust proxy', ['loopback', ...ips[key]])
        })
      })
