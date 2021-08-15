// import modules
const ffmpeg = require('../modules/main');
const { verify }= require('../modules/injector');

// check if injection was successful
if (verify(ffmpeg)) {
  console.log(`Result: Success!`);
  process.exit(0);
} else {
  console.log(`Result: Failed!`);
  process.exit(1);
}