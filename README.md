# FFMPEG-INJECT

This module injects the ffmpeg binaries into the path variable of the current node process. <br>
The binaries are provided by the <a href="https://www.npmjs.com/package/ffmpeg-static" target="_blank">ffmpeg-static</a> module. 

## How to use

The usage is pretty much the same as in ffmpeg-static, except that it also adds the ffmpeg binary path to the environment variables.

```javascript
var file = require('ffmpeg-inject');
var enviroment = process.env['PATH'];

console.log(`path: ${ffmpeg}`);
console.log(`enviroment: ${enviroment}`);
```
```
$ node example.js

path: /home/malte/test/ffmpeg-inject/node_modules/ffmpeg-static/ffmpeg.exe
enviroment: ...:/home/malte/test/ffmpeg-inject/node_modules/ffmpeg-static
```