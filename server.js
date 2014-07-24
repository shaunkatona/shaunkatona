/**
 * Created by shaunkatona on 7/21/14.
 */
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var app = express();

app.set('view engine', 'jade');
app.use(stylus.middleware(
    {
        src: __dirname + '/stylus/',
        dest: __dirname + '/public/',
        linenos: true,
        compile: function (str, path) {
            return stylus(str)
                .set('filename', path)
                .use(nib());
        }
    }
));

app.use(express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
    res.render("index.jade");
});

app.get('/projects', function (req, res) {
    res.render("projects.jade");
});

// pass in a port for at home, otherwise AWS auto-runs on port 80
app.listen(process.argv[2] || 80);