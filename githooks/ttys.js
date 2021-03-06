/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const tty = require('tty');
const assert = require('assert');

if (tty.isatty(0)) {
  exports.stdin = process.stdin;
} else {
  const ttyFd = fs.openSync('/dev/tty', 'r');
  assert(tty.isatty(ttyFd));
  exports.stdin = new tty.ReadStream(ttyFd);
  exports.stdin._type = 'tty';
}

if (tty.isatty(1)) {
  exports.stdout = process.stdout;
} else {
  const ttyFd = fs.openSync('/dev/tty', 'w');
  assert(tty.isatty(ttyFd));
  exports.stdout = new tty.WriteStream(ttyFd);
  exports.stdout._type = 'tty';

  // Hack to have the stdout stream not keep the event loop alive.
  // See: https://github.com/joyent/node/issues/1726
  // XXX: remove/fix this once src/node.js does something different as well.
  if (exports.stdout._handle && exports.stdout._handle.unref) {
    exports.stdout._handle.unref();
  }

  // Update the "columns" and "rows" properties on the stdout stream
  // whenever the console window gets resized.
  if (exports.stdout._refreshSize) {
    process.on('SIGWINCH', () => {
      exports.stdout._refreshSize();
    });
  }
}
