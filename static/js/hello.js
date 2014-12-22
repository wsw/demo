var $ = require('jquery');
var Action = require('action');

$(function() {
    Action.listen({
        hello: function(e) {
            alert('Hello, Gazira!!');
            e.preventDefault();
        }
    });
});
