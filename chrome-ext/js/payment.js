$(document).ready(function() {
  $('#customButton').click(function(e) {
    console.log('paying here')
    var handler = StripeCheckout.configure({
      key: 'pk_test_mkxhcUOMYR5aVoyu1KYsO0e2',
      image: '/icons/sceneLogo.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        },
      closed: function() {
          $('#itemList').hide()
          $('#itemSummary').hide()
          $('#afterCheckoutPage').show()
      }
    });
    // Open Checkout with further options:
    handler.open({
      name: 'Scene',
      description: 'Payment Portal',
      amount: parseFloat($('#total-price').text())*100
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation:
  $(window).on('popstate', function() {
    handler.close();
  });
});
