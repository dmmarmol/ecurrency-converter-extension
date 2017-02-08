// app.js

// Test
$('body').css('background', 'red');

//
var price = $('.sx-price');
var usdVal = 16.5;


$('.s-result-item').each(function(i, value) {
	var productValue = $(this).find('.sx-price-whole').text() + $(this).find('.sx-price-fractional').text();
	console.log(productValue);
});
