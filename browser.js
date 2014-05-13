jQuery(function () {
  "use strict";

  var YAML = require('json2yaml')
    , $ = require('jQuery')
    , $events = $('body')
    ;

  $events.on('click', '.js-convert', function () {
    var json = $('.js-json').val()
      , data
      , yaml
      ;

    try {
      data = JSON.parse(json);
    } catch(e) {
      console.log(e);
      $('.js-yaml').val(
        e.message
      + '\n\n'
      +  e.toString()
      + '\n\n'
      + "Information has been logged to console. If that doesn't help, go validate your YAML at http://yamllint.com to figure out where the error is.\nThen come back here and try again."
      );
      return;
    }

    yaml = YAML.stringify(data);
    $('.js-yaml').val(yaml);
  });

});
