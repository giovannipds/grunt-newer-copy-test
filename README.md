# Grunt Newer + Copy Test

Hello! As asked by [tschaub](https://github.com/tschaub), [here](https://github.com/tschaub/grunt-newer/issues/86), this is just a repo for testing the usage of [grunt-newer](https://github.com/tschaub/grunt-newer) with [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy). They seem to not work properly together.

## How to use this repo

1. Clone it;
2. `npm install`;
3. `grunt`.

Now you should already be running the watch task, just **open any file.html in src folder, edit, and save it**. The copy task should copy just 1 file, **NOT 3**, which is what is ocurring.

Any thoughts about it?