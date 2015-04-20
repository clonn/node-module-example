r = require('rethinkdb');
rdbName = 'test';

var connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;

    r.db(rdbName).tableCreate('authors').run(connection, function(err, result) {
        if (err) {
            console.log("------------------------------------");
            console.log(err);
            console.log("------------------------------------");
            return console.log("authors is ready");
        }

        // console.log(JSON.stringify(result, null, 2));

        // create authors data
        r.table('authors').insert([
            { name: "William Adama", tv_show: "Battlestar Galactica",
              posts: [
                {title: "Decommissioning speech", content: "The Cylon War is long over..."},
                {title: "We are at war", content: "Moments ago, this ship received word..."},
                {title: "The new Earth", content: "The discoveries of the past few days..."}
              ]
            },
            { name: "Laura Roslin", tv_show: "Battlestar Galactica",
              posts: [
                {title: "The oath of office", content: "I, Laura Roslin, ..."},
                {title: "They look like us", content: "The Cylons have the ability..."}
              ]
            },
            { name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
              posts: [
                {title: "Civil rights", content: "There are some words I've known since..."}
              ]
            }
        ]).run(connection, function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        });
    });



    // r.table('authors').run(connection, function(err, cursor) {
    //     if (err) throw err;
    //     cursor.toArray(function(err, result) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
    //     });
    // });

    // r.table('authors').filter(r.row('name').eq("William Adama")).
    //   run(connection, function(err, cursor) {
    //       if (err) throw err;
    //       cursor.toArray(function(err, result) {
    //           if (err) throw err;
    //           console.log(JSON.stringify(result, null, 2));
    //       });
    //   });

    // r.table('authors').filter(r.row('posts').count().gt(2)).
    //     run(connection, function(err, cursor) {
    //         if (err) throw err;
    //         cursor.toArray(function(err, result) {
    //             if (err) throw err;
    //             console.log(JSON.stringify(result, null, 2));
    //         });
    //     });


    // r.table('authors').get('7644aaf2-9928-4231-aa68-4e65e31bf219').
    //     run(connection, function(err, result) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
    //     });

    r.table('authors').changes().run(connection, function(err, cursor) {
        if (err) throw err;
        cursor.each(function(err, row) {
            if (err) throw err;
            console.log(JSON.stringify(row, null, 2));
        });
    });


    // r.table('authors').update({type: "fictional"}).
    //     run(connection, function(err, result) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
    //     });

    // r.table('authors').
    //     filter(r.row("name").eq("William Adama")).
    //     update({rank: "Admiral"}).
    //     run(connection, function(err, result) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
    //     });

    // r.table('authors').filter(r.row("name").eq("Jean-Luc Picard")).
    //     update({posts: r.row("posts").append({
    //         title: "Shakespeare",
    //         content: "What a piece of work is man..."})
    //     }).run(connection, function(err, result) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
    //     });

    // r.table('authors').
    //     filter(r.row('posts').count().lt(3)).
    //     delete().
    //     run(connection, function(err, result) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
    //     });

})

