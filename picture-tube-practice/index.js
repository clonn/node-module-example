/**
 * @overview
 *
 * @author
 * @version 2014/10/24
 */

var pictureTube = require('picture-tube')
var tube = pictureTube();
tube.pipe(process.stdout);

// var fs = require('fs');
// fs.createReadStream('robot.png').pipe(tube);

