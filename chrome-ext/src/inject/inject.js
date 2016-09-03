// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);

// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		console.log("here you go");
// 		console.log(document.getElementById('eow-title').innerHTML);
// 		// ----------------------------------------------------------
// 	}
// 	}, 10);
// });

chrome.extension.sendMessage({text: document.getElementById('eow-title').innerHTML}, function(response) {
    console.log("Response: ", response);
});