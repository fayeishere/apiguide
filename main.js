var SAS = SAS || {};

SAS.main = (function() {
    // Function-level strict mode syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    // 'use strict';
    function initialize() {
        // 
    }
    $(function() {
      $('#twit').on('click', function(e) {
          e.preventDefault()
          window.open(this.href, 'twitter', 'width=600, height=300, top=200, left=200')
      });
    });
    $(function() {
      $('#twitter').on('click', function(e) {
          e.preventDefault()
          var url = ("https://twitter.com/share?text="+encodeURIComponent("Testing twitter. Woot. http://www.theworldsworstwebsiteever.com http://gph.is/13wUtBa") + "&url=' '");
          window.open(url, 'twitter', 'width=600, height=300, top=200, left=200')
      });
    });

    return {
        initialize: initialize
    };
})();

$(document).ready(SAS.main.initialize);
