# Cloudflare IP ranges

![npm](https://img.shields.io/npm/v/cloudflare-ip-ranges.svg)
![npm](https://img.shields.io/npm/dy/cloudflare-ip-ranges.svg)
![Travis (.org)](https://img.shields.io/travis/sampsakuronen/cloudflare-ip-ranges.svg)

Get Cloudflare IPs for use in trust proxy configurations.

This package will be updated if Cloudflare ever decides to change the endpoints for retrieving current IPs. We will most likely never see a breaking change for this package.

## Install

    npm install --save cloudflare-ip-ranges

## API

By specifying `versioned: true` you get an object that contains `V4` and `V6` separately.

    updateIPs({
      versioned: true // defaults to false
    })

## Example usage

For use in an Express environment please see [Express documentation on trust proxies](https://expressjs.com/en/guide/behind-proxies.html).

It is recommended to use `setInterval` for updating the IP list periodically.

    const cloudflareIPRanges = require('cloudflare-ip-ranges')

    cloudflareIPRanges.updateIPs()
      .then((ips) => {
        app.set('trust proxy', ['loopback', ...ips])
      })
