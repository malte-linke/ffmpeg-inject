const { dirname, basename } = require('path');
const { existsSync } = require('fs');

module.exports = {

  /**
   * this injects a file into the path variable
   * @param {string} sep - the seperator of the path variable
   * @param {string} file - the file to inject
   */
  inject: (sep, file) => {
    let target = dirname(file);
    if (process.env['PATH'].endsWith(sep)) {
      // inject and add trailing separator (mostly used for windows)
      process.env['PATH'] += `${target}${sep}`;
    } else {
      // inject without trailing separator (mostly used for linux)
      process.env['PATH'] += `${sep}${target}`;
    }
  },

  /**
   * checks whether the injection was successful
   * @param {string} file - the file that has been injected
   * @returns {boolean} - true if the file was injected
   */
  verify: (file) => {
    let filename = basename(file);
    return existsSync(file);
  }

}