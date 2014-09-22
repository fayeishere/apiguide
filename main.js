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

    window.fbAsyncInit = function() {
      var appId = "";
      switch(window.location.host)
      {
      case "localhost:8081":
        appId = "1422907571258597";
        break;
      case "localhost:8080":
        appId = "305834246207937";
        break;
      case "fayeishere.github.io":
        appId = "861782343846424";
        break;
      default:
        alert('Could not find matching appId');
      }

      FB.init({
        appId      : appId,                        // App ID from the app dashboard
        channelUrl : '//'+window.location.host+'/channel.html', // Channel file for x-domain comms
        status     : true,                                 // Check Facebook Login status
        xfbml      : true                                  // Look for social plugins on the page
      });

      $('#facebook').on('click', function(e) {
          e.preventDefault();

          FB.ui(
            {
              method: 'feed',
              name: 'Sharing on Facebook and you can too',
              link: 'http://fayeishere.github.io/apiguide/',
              picture: 'http://fayeishere.github.io/apiguide/images/coffeecat.jpg',
              caption: 'Caption is optional',
              description: 'This is a fantastic description.'
            },
            function(response) {
              if (response && response.post_id) {
              } else {
                
              }
            }
          );
      });

    };

    // Load the SDK asynchronously
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/all.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    return {
        initialize: initialize
    };
})();

$(document).ready(SAS.main.initialize);
