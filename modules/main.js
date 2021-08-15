#!/bin/node
const { inject, verify } = require('./injector');

// load ffmpeg-static
const ffmpeg = require('ffmpeg-static');

// detect os type
const os = require('os').platform();

// inject ffmpeg-static into process.env
switch (os) {
  case "darwin":
    inject(':', ffmpeg);
    break;

  case "freebsd":
    inject(':', ffmpeg);
    break;

  case "linux":
    inject(':', ffmpeg);
    break;

  case "win32":
    inject(';', ffmpeg);
    break;

  default:
    console.warn(`Unsupported OS: FFmpeg will not be injected into process.env!`);
    break;
}

// verify ffmpeg-static
if (!verify(ffmpeg)) console.warn(`Failed to inject FFmpeg into process.env!`);

// return path, just like ffmpg-static
module.exports = ffmpeg;