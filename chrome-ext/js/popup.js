$(document).ready( function() {
		console.log("hello");
		chrome.tabs.executeScript(null, {file: "src/inject/inject.js"});
});