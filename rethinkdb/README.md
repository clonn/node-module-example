# rethink example

should be install [rethinkDB 2.0](http://rethinkdb.com/docs/install/) before execute. it is a demo update data change event, source code from [rethinkDB JavaScript example](http://rethinkdb.com/docs/examples/).

## pre-install

 * node.js / io.js
 * npm
 * rethinkDB

## run

initial connect to rethinkDB and create a `Author` data, and listen user data change event.

```
npm run start
```

continue update author data and make change event trigger.

```
npm run update
```