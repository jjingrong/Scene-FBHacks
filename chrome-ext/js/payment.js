var script1 = document.createElement("script");
script1.src = "https://js.stripe.com/v2/";
$.getScript("https://js.stripe.com/v2/")
//document.getElementsByTagName("head")[0].appendChild(script1);

var script2 = document.createElement("script");
script2.src = "https://checkout.stripe.com/checkout.js";
$.getScript("https://checkout.stripe.com/checkout.js")
//document.getElementsByTagName("head")[0].appendChild(script2);

$("#customButton").on("click", function myFunction(){
    console.log('paying');

    var handler = StripeCheckout.configure({
      key: 'pk_test_mkxhcUOMYR5aVoyu1KYsO0e2',
      image: '../../icons/sceneLogo.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    $('#customButton').on('click', function(e) {
      // Open Checkout with further options:
      handler.open({
        name: 'Demo Site',
        description: '2 widgets',
        amount: 2000
      });
      e.preventDefault();
    });

    // Close Checkout on page navigation:
    $(window).on('popstate', function() {
      handler.close();
    });
});


