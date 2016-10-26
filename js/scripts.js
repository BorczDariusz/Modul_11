var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(response) {
	console.log('Author', response);
	if (!response.quoteAuthor) {
		response.quoteAuthor = "Unknown author";
	}

	var tweetText = "Quote of the day - " + response.quoteText + " Author: " + response.quoteAuthor;

	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote').text(response.quoteText);
		$('.author').text("Author: " + response.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	});	
});
