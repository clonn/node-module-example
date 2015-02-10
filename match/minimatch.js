/**
 * @overview
 *
 * @author
 * @version 2015/01/30
 */

var minimatch = require("minimatch")

rule = "**/!(image).spec.coffee"
name = "xx/kerkerController.spec.coffee"
result = minimatch(name, rule) // true!
console.log(result)

name = "xx/image.spec.coffee"
result = minimatch(name, rule) // true!
console.log(result)

name = "xxx/image.spec.js"
result = minimatch(name, rule) // true!
console.log(result)
// minimatch("bar.foo", "*.bar") // false!
// minimatch("bar.foo", "*.+(bar|foo)", { debug: true }) // true, and noisy!

